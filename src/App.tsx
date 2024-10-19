import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css';

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "P Mounica",
    age: 29,
    startDate: "2024-10-17",
    endDate: "2024-11-21"
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '0', width: '80vw', margin: '0 auto', boxSizing: 'border-box' }}>
      {/* Fixed Header for Logo and Sign Out Button */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '10px', 
        alignSelf: 'flex-start', 
        width: '100%', 
        flexShrink: 0,
        backgroundColor: rgb(134,79,202),  // This ensures it has the same color as the rest of the page
        zIndex: 1000,
        boxSizing: 'border-box',
        borderBottom: '1px solid #ccc' // Optional: border for visual separation
      }}>
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
        height: '100vh',             
        paddingTop: '80px',  // Create space for the fixed header
        alignItems: 'flex-start',   
        backgroundColor: '#f0f0f0',  
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
          alignSelf: 'flex-start',     
        }}>
          <h2 style={{ textAlign: 'center'}}>Mini Super Market - Full Business Plan</h2>
          <details>
          <summary>
            <span style={{ display: 'inline' }}>
              <h3 style={{ display: 'inline', margin: 0 }}>Scope of work</h3>
            </span>
          </summary>
          <p>1. List of supermarkets in and around Chandanagar and Hyderabad</p>
          <p>2. List of shops/shutters available to be occupied in and around Chandanagar and Hyderabad</p>
          <p>3. What products are selling the most</p>
          <p>4. What products a mini supermarket generally holds</p>
          <p>5. Client prefers non-expiring products like ladies' ornaments, etc.</p>
          <p>6. Client prefers a location in Chandanagar, close to their house</p>
          <p>7. Where to source products from: list of dealers, suppliers, stockists, and profit margins</p>
          <p>8. List of registrations and permissions required, along with their costs</p>
          <p>9. Financials: cash flow statement and balance sheet, future inflows</p>
          <p>&emsp;&emsp;a. GTM strategy: Grand opening of the new store</p>
          <p>&emsp;&emsp;b. Best ways to enter the business</p>
          <p>10. Cost breakdown: rent, employee salaries, infrastructure, furniture, electricity bill, new AC units</p>
          <p>11. Insurance for the supermarket and store</p>
          <p>12. Initial investment required, with a detailed breakdown</p>
          <p>13. Logistics and stock houses required, along with their costs</p>
          <p>&emsp;&emsp;a. Fast-moving products: stock management</p>
          <p>&emsp;&emsp;b. Ambiance maintenance: AC, scent, etc.</p>
          <p>&emsp;&emsp;c. Neatness: maintaining cleanliness through employees</p>
          <p>&emsp;&emsp;d. Festival discounts</p>
          <p>&emsp;&emsp;e. Combo offers: negotiating discounts with suppliers and passing them to customers</p>
          <p>15. Packing material: value-added packing material details</p>
          <p>&emsp;&emsp;a. Own packing vs. dealers packing (cost wise analysis)</p>
          <p>16. Swiggy, Instamart, etc. tie-up options</p>
          <p>17. Come up with options for in-house brands like "Karachi Bakery", etc.</p>
          </details>
        </div>

        {/* Right box: Client Details */}
        <div style={{ 
          flexBasis: '20%',          
          padding: '10px 20px', 
          backgroundColor: '#e0e0e0', 
          height: '100%',               
          boxSizing: 'border-box',       
          textAlign: 'left',           
        }}>
          <h2 style={{ textAlign: 'center'}}>Client Details</h2>
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
