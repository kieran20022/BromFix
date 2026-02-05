import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { Hammer, Cog, Gauge, Wrench } from 'lucide-react'

function BromFixLanding() {
  const [repairCount, setRepairCount] = useState(0)
  const controls = useAnimation()

  const triggerRepair = async () => {
    setRepairCount(repairCount + 1)
    await controls.start({ rotate: 360, scale: [1, 1.3, 1] })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">BromFix Platform</h1>
          <p className="text-xl text-slate-400">Advanced repair and testing system</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-lg"
          >
            <Hammer className="w-12 h-12 mb-3 text-purple-200" />
            <h3 className="text-2xl font-semibold mb-2">Repair Tools</h3>
            <p className="text-purple-200">Diagnostic utilities active</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-900 to-teal-700 p-6 rounded-lg"
          >
            <Cog className="w-12 h-12 mb-3 text-teal-200" />
            <h3 className="text-2xl font-semibold mb-2">Configuration</h3>
            <p className="text-teal-200">System settings ready</p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-slate-900 p-8 rounded-lg border-2 border-cyan-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Gauge className="w-8 h-8 text-cyan-400" />
            Repair Operations
          </h2>
          
          <div className="flex items-center gap-6 mb-6">
            <button
              onClick={triggerRepair}
              className="bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Execute Repair
            </button>

            <motion.div
              animate={controls}
              className="flex items-center gap-3"
            >
              <Wrench className="w-10 h-10 text-yellow-400" />
              <span className="text-4xl font-bold text-cyan-400">{repairCount}</span>
            </motion.div>
          </div>

          <div className="bg-slate-800 p-4 rounded">
            <p className="text-sm text-slate-400">
              Technologies: Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React + React Router DOM
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link 
            to="/diagnostics" 
            className="inline-block bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Diagnostics →
          </Link>
        </div>
      </div>
    </div>
  )
}

function DiagnosticsPanel() {
  const [systemStatus, setSystemStatus] = useState(85)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="text-4xl font-bold mb-8 text-cyan-400"
        >
          System Diagnostics
        </motion.h1>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Health Status: {systemStatus}%</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setSystemStatus(Math.min(100, systemStatus + 5))}
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition-colors"
              >
                Optimize +5
              </button>
              <button
                onClick={() => setSystemStatus(Math.max(0, systemStatus - 5))}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded transition-colors"
              >
                Stress Test -5
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <Gauge className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">Performance Metrics</h3>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${systemStatus}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-block bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Routes>
        <Route path="/" element={<BromFixLanding />} />
        <Route path="/diagnostics" element={<DiagnosticsPanel />} />
      </Routes>
    </motion.div>
  )
}

export default App
