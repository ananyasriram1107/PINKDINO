import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
          <h1 className="display-5 fw-bold mb-3">Modern multi-tier fitness tracking</h1>
          <p className="lead text-body-secondary mb-4">
            This React 19 + Vite presentation tier is ready to connect to the Node.js / Express / TypeScript API and MongoDB data layer.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">Check API</a>
            <a className="btn btn-outline-secondary btn-lg" href="https://vite.dev/">Vite Docs</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h2 className="h4 mb-3">Ready for the full stack</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Frontend: React 19 + Vite on port 5173</li>
              <li className="list-group-item">Backend: Express + TypeScript on port 8000</li>
              <li className="list-group-item">Database: MongoDB via Mongoose on port 27017</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
