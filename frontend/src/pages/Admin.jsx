import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('adminToken') || null);
  
  // Login State
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard State
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Testimonials State
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', role: 'Patient', content: '', rating: 5 });
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApt, setSelectedApt] = useState(null); // For Modal
  const [deleteTarget, setDeleteTarget] = useState(null); // {type: "appointment"|"testimonial", id: number}
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (token) {
      fetchAppointments();
      // Auto-refresh data every 30 seconds
      const intervalId = setInterval(fetchAppointments, 30000);
      return () => clearInterval(intervalId);
    }
  }, [token]);

  useEffect(() => {
    if (activeTab === 'testimonials' && token) {
      fetchTestimonials();
    }
  }, [activeTab, token]);

  const fetchTestimonials = async () => {
    try {
      setLoadingTestimonials(true);
      const res = await fetch('http://localhost:8787/api/testimonials');
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch testimonials', err);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const handleAddTestimonial = async (e) => {
    e.preventDefault();
    setIsAddingTestimonial(true);
    try {
      const res = await fetch('http://localhost:8787/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(newTestimonial)
      });
      const data = await res.json();
      if (data.success) {
        fetchTestimonials();
        setNewTestimonial({ name: '', role: 'Patient', content: '', rating: 5 });
      } else {
        alert('Failed to add: ' + data.error);
      }
    } catch (err) {
      alert('Error adding testimonial.');
    } finally {
      setIsAddingTestimonial(false);
    }
  };

  const handleDeleteTestimonial = (id) => {
    setDeleteTarget({ type: 'testimonial', id });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch('http://localhost:8787/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
      } else {
        setLoginError(data.error || 'Invalid password');
      }
    } catch (err) {
      setLoginError('Server connection error.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setAppointments([]);
  };

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8787/api/appointments', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setAppointments(data.data);
        setError(null);
      } else {
        setError(data.error);
        if (res.status === 401) handleLogout();
      }
    } catch (err) {
      setError('Failed to load appointments.');
    } finally {
      setLoading(false);
    }
  };



  const toggleStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:8787/api/appointments/${id}/status`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setAppointments(appointments.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
      } else {
        alert('Failed to update status');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const executeDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const endpoint = deleteTarget.type === 'appointment' ? 'appointments' : 'testimonials';
      const res = await fetch(`http://localhost:8787/api/${endpoint}/${deleteTarget.id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        if (deleteTarget.type === 'appointment') {
          setAppointments(appointments.filter(a => a.id !== deleteTarget.id));
          if (selectedApt && selectedApt.id === deleteTarget.id) {
            setSelectedApt(null);
          }
        } else if (deleteTarget.type === 'testimonial') {
          setTestimonials(testimonials.filter(t => t.id !== deleteTarget.id));
        }
        setDeleteTarget(null);
      } else {
        alert('Failed to delete: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Network error while deleting.');
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredAppointments = appointments.filter(apt => 
    apt.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    apt.phone.includes(searchTerm) || 
    (apt.email && apt.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800">Admin Login</h2>
            <p className="text-slate-500 mt-2 font-medium">Please enter the master password</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold text-center border border-red-100">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-shadow" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <button type="submit" disabled={isLoggingIn} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 disabled:opacity-50">
              {isLoggingIn ? 'Verifying...' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col h-screen sticky top-0 flex-shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
            <img src="/images/logo.png" alt="Smile Planet Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl tracking-wide text-white">Smile Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-teal-600/20 text-teal-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            Dashboard
          </button>
          <button onClick={() => setActiveTab('testimonials')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'testimonials' ? 'bg-teal-600/20 text-teal-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Testimonials
          </button>
          <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'settings' ? 'bg-teal-600/20 text-teal-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-white bg-slate-800 hover:bg-red-500/20 hover:text-red-400 px-4 py-3 rounded-xl font-bold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="bg-white h-20 px-8 flex items-center justify-between border-b border-slate-200 sticky top-0 z-10 flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-800">{activeTab === 'dashboard' ? 'Inquiries Overview' : activeTab === 'testimonials' ? 'Manage Testimonials' : 'System Settings'}</h2>
            <p className="text-sm text-slate-500 font-medium">{activeTab === 'dashboard' ? 'Manage and respond to patient requests' : activeTab === 'testimonials' ? 'Add or remove patient reviews from the website' : 'Manage your admin account'}</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchAppointments} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors" title="Refresh">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border-2 border-teal-200">
              AD
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-8 pb-32">

          {activeTab === 'testimonials' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form to Add Testimonial */}
              <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-fit">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Add New Testimonial</h3>
                <form onSubmit={handleAddTestimonial} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Patient Name</label>
                    <input type="text" required value={newTestimonial.name} onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Role/Treatment</label>
                    <input type="text" value={newTestimonial.role} onChange={e => setNewTestimonial({...newTestimonial, role: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Root Canal Patient" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Rating (1-5)</label>
                    <input type="number" min="1" max="5" required value={newTestimonial.rating} onChange={e => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Review Content</label>
                    <textarea required rows="4" value={newTestimonial.content} onChange={e => setNewTestimonial({...newTestimonial, content: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Best dental experience ever..."></textarea>
                  </div>
                  <button type="submit" disabled={isAddingTestimonial} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 disabled:opacity-50">
                    {isAddingTestimonial ? 'Adding...' : 'Publish Testimonial'}
                  </button>
                </form>
              </div>

              {/* List of Testimonials */}
              <div className="lg:col-span-2 space-y-4">
                {loadingTestimonials ? (
                  <div className="text-center py-20 text-slate-500 font-bold">Fetching testimonials...</div>
                ) : testimonials.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No Testimonials</h3>
                    <p className="text-slate-500">Add your first patient review using the form.</p>
                  </div>
                ) : (
                  testimonials.map(t => (
                    <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium">{t.role}</span>
                        </div>
                        <div className="flex text-amber-400 mb-3 text-sm">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < t.rating ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                          ))}
                        </div>
                        <p className="text-slate-600 italic">"{t.content}"</p>
                      </div>
                      <button onClick={() => handleDeleteTestimonial(t.id)} className="text-red-500 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl font-bold transition-colors text-sm whitespace-nowrap">
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : activeTab === 'settings' ? (

            <div className="max-w-2xl bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Change Admin Password</label>
                  <input type="password" placeholder="New password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                  <input type="password" placeholder="Confirm new password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/50" />
                </div>
                <button onClick={() => alert('Password update feature coming soon!')} className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Total Inquiries</p>
                    <h3 className="text-3xl font-black text-slate-800">{appointments.length}</h3>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">New This Week</p>
                    <h3 className="text-3xl font-black text-slate-800">{appointments.filter(a => new Date(a.createdAt.replace(' ', 'T') + 'Z') > new Date(Date.now() - 7*24*60*60*1000)).length}</h3>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Pending</p>
                    <h3 className="text-3xl font-black text-slate-800">{appointments.filter(a => a.status !== 'complete').length}</h3>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Completed</p>
                    <h3 className="text-3xl font-black text-slate-800">{appointments.filter(a => a.status === 'complete').length}</h3>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-slate-800 text-lg">Recent Submissions</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search patients..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 w-64 transition-all" 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                </div>

                {loading ? (
                  <div className="text-center py-20 text-slate-500 font-bold">Fetching latest data...</div>
                ) : error ? (
                  <div className="p-8 text-center text-red-500 font-bold bg-red-50">{error}</div>
                ) : filteredAppointments.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">No Results</h3>
                    <p className="text-slate-500">No inquiries match your search criteria.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                          <th className="p-5 font-bold">Date Received</th>
                          <th className="p-5 font-bold">Patient Details</th>
                          <th className="p-5 font-bold">Inquiry Type</th>
                          <th className="p-5 font-bold">Message</th>
                          <th className="p-5 font-bold">Status</th>
                          <th className="p-5 font-bold text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredAppointments.map((apt) => (
                          <tr key={apt.id} className="hover:bg-slate-50 transition-colors group">
                            <td className="p-5 text-sm font-medium text-slate-500 whitespace-nowrap">
                              {new Date(apt.createdAt.replace(' ', 'T') + 'Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              <div className="text-xs text-slate-400 font-normal mt-0.5">{new Date(apt.createdAt.replace(' ', 'T') + 'Z').toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                            </td>
                            <td className="p-5 whitespace-nowrap">
                              <div className="font-bold text-slate-800">{apt.fullName}</div>
                              <div className="text-sm text-slate-500 flex items-center gap-2 mt-0.5">
                                <span className="font-medium text-slate-600">{apt.phone}</span>
                              </div>
                              {apt.email && <div className="text-xs text-teal-600 mt-0.5">{apt.email}</div>}
                            </td>
                            <td className="p-5">
                              <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap border border-teal-100">
                                {apt.service}
                              </span>
                            </td>
                            <td className="p-5 text-sm text-slate-600 min-w-[250px] max-w-[400px]">
                              <p className="truncate group-hover:whitespace-normal group-hover:break-words transition-all">
                                {apt.message || <span className="text-slate-300 italic">No message provided</span>}
                              </p>
                            </td>
                            <td className="p-5 whitespace-nowrap">
                              <select 
                                value={apt.status || 'pending'} 
                                onChange={(e) => toggleStatus(apt.id, e.target.value)}
                                className={`text-xs font-bold px-3 py-1.5 rounded-lg border outline-none cursor-pointer transition-colors ${apt.status === 'complete' ? 'bg-green-50 text-green-700 border-green-200 focus:border-green-400' : 'bg-amber-50 text-amber-700 border-amber-200 focus:border-amber-400'}`}
                              >
                                <option value="pending">Pending</option>
                                <option value="complete">Complete</option>
                              </select>
                            </td>
                            <td className="p-5 text-right whitespace-nowrap">
                              <button onClick={() => setSelectedApt(apt)} className="text-slate-400 hover:text-teal-600 transition-colors p-2" title="View Details">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                              </button>
                              <button onClick={() => setDeleteTarget({ type: 'appointment', id: apt.id })} className="text-slate-400 hover:text-red-600 transition-colors p-2" title="Delete Inquiry">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* View Details Modal */}
      {selectedApt && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <button onClick={() => setSelectedApt(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">
                {selectedApt.fullName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{selectedApt.fullName}</h3>
                <p className="text-slate-500 text-sm">{new Date(selectedApt.createdAt.replace(' ', 'T') + 'Z').toLocaleString()}</p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contact Info</p>
                <p className="font-medium text-slate-700">{selectedApt.phone}</p>
                {selectedApt.email && <p className="font-medium text-slate-700">{selectedApt.email}</p>}
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Inquiry Type</p>
                <p className="font-bold text-teal-600">{selectedApt.service}</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                <p className="text-xs font-bold text-teal-600/70 uppercase tracking-wider mb-2">Message</p>
                <p className="font-medium text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedApt.message || <span className="italic text-slate-500">No additional message was provided by the patient.</span>}
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteTarget({ type: 'appointment', id: selectedApt.id })} className="px-5 py-2.5 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-colors">
                Delete
              </button>
              <button onClick={() => setSelectedApt(null)} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center transform transition-all">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2">{deleteTarget.type === 'appointment' ? 'Delete Inquiry?' : 'Delete Testimonial?'}</h3>
            <p className="text-slate-500 font-medium mb-8">This action cannot be undone. Are you sure you want to permanently remove this {deleteTarget.type === 'appointment' ? "patient's message" : "review"}?</p>
            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteTarget(null)} 
                disabled={isDeleting}
                className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                onClick={executeDelete}
                disabled={isDeleting}
                className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Deleting...
                  </>
                ) : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
