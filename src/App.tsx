import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css'; // Assuming you have a CSS file for additional styles

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "John Doe",
    age: 35,
    startDate: "2023-01-15",
    endDate: "2024-01-15"
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img 
          src="https://rajanbusinessideas.com/img/logo.png" 
          alt="Company Logo" 
          style={{ width: '150px', height: 'auto', marginRight: 'auto' }} 
        />
        <button onClick={signOut} style={{ marginLeft: 'auto' }}>Sign out</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
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
      </div>
    </main>
  );
}

export default App;
