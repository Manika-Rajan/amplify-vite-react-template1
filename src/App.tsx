import { useEffect, useState } from "react";
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

    // State for storing the fetched table data
  const [shopData, setShopData] = useState([]);

  // Fetch data from Lambda on component mount
  useEffect(() => {
    async function fetchShopData() {
      const response = await fetch('https://gybmq07gv4.execute-api.ap-south-1.amazonaws.com/default/pmounica-mini-supermarket');
      const data = await response.json();
      setShopData(data);
    }

    fetchShopData();
  }, []);

  
  
  // Sample data for the updates table
  const updates = [
    { updateDate: "2024-10-20", status: "In Progress", updatesDone: "List of Super Markets" },
    { updateDate: "2024-10-24", status: "", updatesDone: "" },
    { updateDate: "2024-10-28", status: "", updatesDone: "" },
    { updateDate: "2024-11-01", status: "", updatesDone: "" },
    { updateDate: "2024-11-05", status: "", updatesDone: "" },
    { updateDate: "2024-11-09", status: "", updatesDone: "" },
    { updateDate: "2024-11-13", status: "", updatesDone: "" },
    { updateDate: "2024-11-17", status: "", updatesDone: "" },
    { updateDate: "2024-11-21", status: "", updatesDone: "" },
    { updateDate: "Meeting 1", status: "", updatesDone: "" },
    { updateDate: "Meeting 2", status: "", updatesDone: "" },
    { updateDate: "Meeting 3", status: "", updatesDone: "" },
  ];
  
  return (
    <main style={{ height: '720px', display: 'flex', flexDirection: 'column', padding: '0', width: '80vw', margin: '0 auto', boxSizing: 'border-box' }}>
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
        position: 'relative',
        display: 'flex', 
        flexGrow: 1, 
        overflow: 'hidden', 
        width: '100%', 
        height: '100vh',  
        minHeight: '60vh',  
        paddingTop: '80px',         // Create space for the fixed header
        alignItems: 'flex-start',   
        backgroundColor: 'transparent',  
        top: '1',
      }}>
        {/* Left box: Paragraphs */}
        <div style={{ 
          flexBasis: '80%',          
          padding: '10px 20px', 
          backgroundColor: '#f0f0f0', 
          overflowY: 'auto',          
          maxHeight: 'calc(80vh - 100px)', 
          boxSizing: 'border-box',
          textAlign: 'left',           
          marginRight: '10px',         
          alignSelf: 'flex-start',  
          top: '0',
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

          {/* New Expandable Section for List of rental shops/shutters */}
        <details>
          <summary><h3>List of rental shops/shutters</h3></summary>
          <table>
            <thead>
              <tr>
                <th>Shop Name</th>
                <th>Location</th>
                <th>Size (sq ft)</th>
                <th>Rent Price</th>
              </tr>
            </thead>
            <tbody>
              {shopData.length > 0 ? (
                shopData.map((shop, index) => (
                  <tr key={index}>
                    <td>{shop.shopName}</td>
                    <td>{shop.location}</td>
                    <td>{shop.size}</td>
                    <td>{shop.rentPrice}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading data...</td>
                </tr>
              )}
            </tbody>
          </table>
        </details>
          
        </div>

        {/* Right box: Client Details */}
        <div style={{ 
          flexBasis: '20%',          
          padding: '10px 20px', 
          backgroundColor: '#e0e0e0', 
          /* height: '100%',       */        
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

                {/* Updates Table - Float at the bottom */}
      <div style={{ height: '20vh', padding: '20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #ccc', flexShrink: 0 }}>
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

      
            {/* Fixed Header for Logo and Sign Out Button */}
      <div className="header">
        <img 
          src="https://rajanbusinessideas.com/img/logo.png" 
          alt="Company Logo" 
          style={{ width: '150px', height: 'auto' }} 
        />
        <button onClick={signOut} style={{ marginLeft: 'auto' }}>Sign out</button>
      </div>

      
    </main>
    

  );
}

export default App;
