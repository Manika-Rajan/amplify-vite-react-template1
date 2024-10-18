import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css'; // Assume you will add some CSS to style the layout

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "John Doe",
    age: 35,
    startDate: "2023-01-15",
    endDate: "2024-01-15"
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Left box: Paragraphs */}
      <div style={{ width: '60%', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Document Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
        </p>
        <p>
          Phasellus ac lacus nec eros facilisis viverra. Ut eu libero sit amet quam egestas semper. Aenean vehicula, orci sed.
        </p>
        <p>
          Proin feugiat, odio eget tincidunt elementum, velit risus viverra elit, at gravida nisi sapien vel nulla. Curabitur sit amet semper justo.
        </p>
      </div>

      {/* Right box: Client Details */}
      <div style={{ width: '35%', padding: '20px', backgroundColor: '#e0e0e0' }}>
        <h2>Client Details</h2>
        <p><strong>Name:</strong> {clientDetails.name}</p>
        <p><strong>Age:</strong> {clientDetails.age}</p>
        <p><strong>Start Date:</strong> {clientDetails.startDate}</p>
        <p><strong>End Date:</strong> {clientDetails.endDate}</p>
      </div>

      {/* Sign out button */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <button onClick={signOut}>Sign out</button>
      </div>
    </main>
  );
}

export default App;
