function ToolForm({ onAdd }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form className="tool-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tool name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Tool</button>
    </form>
  );
}

function ToolList({ tools }) {
  return (
    <ul className="tool-list">
      {tools.map((tool, index) => (
        <li key={index}>
          <strong>{tool.name}</strong>
          {tool.description && ` - ${tool.description}`}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [tools, setTools] = React.useState([]);

  const handleAdd = (tool) => {
    setTools([...tools, tool]);
  };

  return (
    <div className="portal">
      <header>
        <h1>Eviora Tool Portal ✈️</h1>
        <p>Manage and add aviation utilities</p>
      </header>
      <main>
        <ToolForm onAdd={handleAdd} />
        <ToolList tools={tools} />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Eviora</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

