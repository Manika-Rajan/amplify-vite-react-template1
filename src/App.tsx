import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css'; // Ensure the CSS file is being used

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "P Mounica",
    age: 29,
    startDate: "2024-10-17",
    endDate: "2024-11-21"
  };

  // Sample data for the updates table
  const updates = [
    { updateDate: "2024-10-01", status: "Completed", updatesDone: "Initial setup done" },
    { updateDate: "2024-10-05", status: "In Progress", updatesDone: "Market research ongoing" },
    { updateDate: "2024-10-10", status: "Pending", updatesDone: "Awaiting approvals" },
  ];

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '0', width: '80vw', margin: '0 auto', boxSizing: 'border-box' }}>
      {/* Fixed Header for Logo and Sign Out Button */}
      <div className="header">
        <img 
          src="https://rajanbusinessideas.com/img/logo.png" 
          alt="Company Logo" 
          style={{ width: '150px', height: 'auto' }} 
        />
        <button onClick={signOut} style={{ marginLeft: 'auto' }}>Sign out</button>
      </div>

      {/* Main Content Container */}
      <div style={{ 
        display: 'flex', 
        flexGrow: 1, 
        overflow: 'hidden', 
        width: '100%', 
        height: 'calc(100vh - 80px)', // Adjust for header height
        paddingTop: '20px',         // Add some padding
        backgroundColor: 'transparent',
      }}>
        {/* Left box: Paragraphs */}
        <div style={{ 
          flexBasis: '80%',          
          padding: '10px 20px', 
          backgroundColor: '#f0f0f0', 
          overflowY: 'auto',          
          maxHeight: 'calc(100vh - 100px)', 
          boxSizing: 'border-box',
          textAlign: 'left',           
          marginRight: '10px',         
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 style={{ textAlign: 'center'}}>Mini Super Market - Full Business Plan</h2>
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Scope of work</h3>
              </span>
            </summary>
            {/* Add content here */}
          </details>
          {/* Additional content can go here */}
        </div>

        {/* Right box: Client Details */}
        <div style={{ 
          flexBasis: '20%',          
          padding: '10px 20px', 
          backgroundColor: '#e0e0e0', 
          boxSizing: 'border-box',       
          textAlign: 'left',           
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 style={{ textAlign: 'center'}}>Client Details</h2>
          <p><strong>Name:</strong> {clientDetails.name}</p>
          <p><strong>Age:</strong> {clientDetails.age}</p>
          <p><strong>Start Date:</strong> {clientDetails.startDate}</p>
          <p><strong>End Date:</strong> {clientDetails.endDate}</p>
        </div>
      </div>

      {/* Updates Table - Float at the bottom */}
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #ccc' }}>
        <h2 style={{ textAlign: 'center' }}>Updates</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Update Date</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Updates Done</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{update.updateDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{update.status}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{update.updatesDone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
