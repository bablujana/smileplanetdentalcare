import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors({
  origin: '*', 
  allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.get('/api/health', (c) => {
  return c.json({ status: 'ok', message: 'Hono Worker is running perfectly!' })
})

app.post('/api/login', async (c) => {
  try {
    const body = await c.req.json();
   if (body.password === c.env.ADMIN_PASSWORD) {
  return c.json({ success: true, token: c.env.ADMIN_TOKEN });
}
    return c.json({ success: false, error: 'Invalid password' }, 401);
  } catch (err) {
    return c.json({ success: false, error: 'Invalid request' }, 400);
  }
})

app.get('/api/appointments', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`) {
    return c.json({ success: false, error: 'Unauthorized. Please login.' }, 401);
  }
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM appointments ORDER BY createdAt DESC'
    ).all();
    
    return c.json({ success: true, data: results });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

app.post('/api/appointments', async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, phone, email, service, message, preferredDate, preferredTime } = body;
    
    if (!fullName || !phone || !service) {
      return c.json({ success: false, error: 'Missing required fields' }, 400);
    }
    
    const { success } = await c.env.DB.prepare(
      `INSERT INTO appointments (fullName, phone, email, service, message, preferredDate, preferredTime) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(fullName, phone, email || '', service, message || '', preferredDate || '', preferredTime || '').run();
    
    if (success) {
      return c.json({ success: true, message: 'Appointment booked successfully' }, 201);
    } else {
      return c.json({ success: false, error: 'Failed to insert into database' }, 500);
    }
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

app.delete('/api/appointments/:id', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  try {
    const id = c.req.param('id');
    const { success } = await c.env.DB.prepare('DELETE FROM appointments WHERE id = ?').bind(id).run();
    if (success) {
      return c.json({ success: true, message: 'Deleted successfully' });
    }
    return c.json({ success: false, error: 'Failed to delete' }, 500);
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})




app.patch('/api/appointments/:id/status', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    const { status } = body;
    if (status !== 'pending' && status !== 'complete') {
       return c.json({ success: false, error: 'Invalid status' }, 400);
    }
    const { success } = await c.env.DB.prepare('UPDATE appointments SET status = ? WHERE id = ?').bind(status, id).run();
    if (success) {
      return c.json({ success: true, message: 'Status updated' });
    }
    return c.json({ success: false, error: 'Failed to update' }, 500);
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

// --- TESTIMONIALS API ---

// Get all testimonials (Public, no auth required)
app.get('/api/testimonials', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM testimonials ORDER BY createdAt DESC'
    ).all();
    return c.json({ success: true, data: results });
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

// Create a new testimonial (Protected)
app.post('/api/testimonials', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`) return c.json({ success: false, error: 'Unauthorized' }, 401);
  
  try {
    const body = await c.req.json();
    const { name, role, content, rating } = body;
    
    if (!name || !content) return c.json({ success: false, error: 'Missing required fields' }, 400);
    
    const { success } = await c.env.DB.prepare(
      `INSERT INTO testimonials (name, role, content, rating) VALUES (?, ?, ?, ?)`
    ).bind(name, role || 'Patient', content, rating || 5).run();
    
    if (success) return c.json({ success: true, message: 'Testimonial added' }, 201);
    return c.json({ success: false, error: 'Failed to insert' }, 500);
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

// Delete a testimonial (Protected)
app.delete('/api/testimonials/:id', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`) return c.json({ success: false, error: 'Unauthorized' }, 401);
  
  try {
    const id = c.req.param('id');
    const { success } = await c.env.DB.prepare('DELETE FROM testimonials WHERE id = ?').bind(id).run();
    if (success) return c.json({ success: true, message: 'Deleted successfully' });
    return c.json({ success: false, error: 'Failed to delete' }, 500);
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500);
  }
})

export default app

