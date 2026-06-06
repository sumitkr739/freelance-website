import React, { useState } from 'react';
import { Calendar, Clock, Video, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Calendly() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Quick weekdays list
  const weekdays = [
    { id: 1, name: 'Mon', date: 'Jun 8', available: true },
    { id: 2, name: 'Tue', date: 'Jun 9', available: true },
    { id: 3, name: 'Wed', date: 'Jun 10', available: true },
    { id: 4, name: 'Thu', date: 'Jun 11', available: false }, // fully booked
    { id: 5, name: 'Fri', date: 'Jun 12', available: true }
  ];

  // Specific slots available
  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime || !emailInput.trim() || !nameInput.trim()) return;

    setSubmitting(true);
    // Simulate API record dispatch delay
    setTimeout(() => {
      setSubmitting(false);
      setBooked(true);
    }, 1200);
  };

  const activeDayLabel = weekdays.find(w => w.id === selectedDay);

  return (
    <section id="book" className="py-24 px-4 bg-neutral-950">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Caption */}
        <div className="space-y-4 text-center">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
            Schedule a 15-Min Technical Strategy Session
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto leading-relaxed">
            Let's chat about your project requirements, coordinate architectural recommendations, evaluate budgets, and schedule our discovery.
          </p>
        </div>

        {/* Calendar widget wrapper mockup */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
          
          {/* Left Side: Host Details card */}
          <div className="md:col-span-5 bg-neutral-950 p-6 sm:p-8 space-y-6 border-r border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
                  alt="Sumit Sinha"
                  className="h-10 w-10 rounded-full border border-neutral-700 object-cover object-center"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-505 bg-emerald-500 border-2 border-neutral-95% border-neutral-950" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Sumit Sinha</h4>
                <span className="block text-[10px] font-mono text-neutral-400">Principal Tech Partner</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-50 leading-tight">15-Min Discovery Call</h3>
              
              <ul className="space-y-3.5 text-xs text-neutral-405 text-neutral-400">
                <li className="flex items-center gap-2">
                  <Clock className="h-4.5 w-4.5 text-neutral-550 text-neutral-500 shrink-0" />
                  <span>15 minutes duration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Video className="h-4.5 w-4.5 text-neutral-550 text-neutral-500 shrink-0" />
                  <span>Google Meet Video Link shared</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4.5 w-4.5 text-neutral-550 text-neutral-500 shrink-0" />
                  <span>UTC +02:00 Timezone synchronized</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-neutral-850 pt-5 text-[11px] text-neutral-505 text-neutral-500 font-sans leading-relaxed">
              * To guarantee high availability, please check that you have prepared basic scoping documents or completed the Scoping Inquiry model first.
            </div>
          </div>

          {/* Right Side Selection Grid */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!booked ? (
                <motion.div
                  key="calendar-selector"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-sm font-semibold text-neutral-100 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-indigo-400" /> Choose active day and slot
                  </h3>

                  {/* Days Selector row */}
                  <div className="grid grid-cols-5 gap-2">
                    {weekdays.map((day) => (
                      <button
                        key={day.id}
                        disabled={!day.available}
                        onClick={() => {
                          setSelectedDay(day.id);
                          setSelectedTime(null);
                        }}
                        className={`rounded-2xl border p-2 sm:p-3 text-center transition flex flex-col justify-center items-center ${
                          selectedDay === day.id
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg'
                            : day.available
                              ? 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                              : 'bg-neutral-950/20 border-neutral-900 text-neutral-600 cursor-not-allowed opacity-30'
                        }`}
                      >
                        <span className="block text-[10px] uppercase font-mono tracking-wider">{day.name}</span>
                        <span className="block text-xs font-bold mt-1">{day.date.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Times Grid */}
                  {selectedDay !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">Available hours</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((ts) => (
                          <button
                            key={ts}
                            onClick={() => setSelectedTime(ts)}
                            className={`rounded-xl border px-3 py-2 text-xs font-semibold text-center transition ${
                              selectedTime === ts
                                ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg'
                                : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                            }`}
                          >
                            {ts}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Form confirmation block */}
                  {selectedTime && (
                    <motion.form
                      onSubmit={handleBookSession}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 border-t border-neutral-800 pt-5 mt-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-xs text-white outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-xs text-white outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-2xl bg-indigo-600 py-3 text-xs font-bold text-white shadow-lg flex items-center justify-center gap-1.5 hover:bg-indigo-500 active:scale-95 transition disabled:opacity-45"
                      >
                        {submitting ? (
                          <>
                            <span className="h-4.5 w-4.5 rounded-full border-2 border-white/20 border-t-white animate-spin shrink-0" />
                            <span>Confirming Booking...</span>
                          </>
                        ) : (
                          <>
                            <span>Confirm Session: {activeDayLabel?.name}, {selectedTime}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}

                </motion.div>
              ) : (
                /* Success booking panel card */
                <motion.div
                  key="booked-confirmed"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-center py-8"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">Call Successfully Scheduled!</h3>
                    <p className="text-xs text-neutral-400 font-sans max-w-sm mx-auto leading-relaxed">
                      Discovery invitation has been forwarded to <strong className="text-white">{emailInput}</strong>. We've automatically attached a Google Meet invite and coordinates.
                    </p>
                  </div>

                  <div className="flex justify-center pt-3">
                    <button
                      onClick={() => {
                        setBooked(false);
                        setSelectedDay(null);
                        setSelectedTime(null);
                        setEmailInput('');
                        setNameInput('');
                      }}
                      className="rounded-xl border border-neutral-800 hover:bg-neutral-850 px-4 py-2 text-xs text-neutral-300"
                    >
                      Schedule another session
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
