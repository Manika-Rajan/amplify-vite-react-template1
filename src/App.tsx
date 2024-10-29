import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css'; // Ensure the CSS file is being used

// Define a type for shop data
type ShopData = {
  Location: string;
  Pincode: string;
  Area1: string; // keep as string
  Owners_Name: string;
  Total_Rent: string; // keep as string
};

type SupermarketData = {
  SMname: string;
  Adress: string;
  Pincode1: string;
};

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "P Mounica",
    age: 29,
    startDate: "2024-10-17",
    endDate: "2024-11-21"
  };

  // State for storing the fetched table data
  const [shopData, setShopData] = useState<ShopData[]>([]);
  const [supermarketData, setSupermarketData] = useState<SupermarketData[]>([]);

  // Fetch data from Lambda on component mount
  useEffect(() => {
    async function fetchShopData() {
      try {
        const response = await fetch('https://gybmq07gv4.execute-api.ap-south-1.amazonaws.com/v1/pmounica-mini-supermarket');
        const data: ShopData[] = await response.json();

        // Log the types and values of the fetched data
        console.log(typeof data[0]?.Area1, data[0]?.Area1);
        console.log(typeof data[0]?.Total_Rent, data[0]?.Total_Rent);

        setShopData(data);
      } catch (error) {
        console.error('Error fetching shop data:', error);
      }
    }
  
    async function fetchSupermarketData() {
      try {
        const response = await fetch('https://x756c7ckq9.execute-api.ap-south-1.amazonaws.com/default/pmounica-mini-supermarket-1');
        const data: SupermarketData[] = await response.json();
        setSupermarketData(data);
      } catch (error) {
        console.error('Error fetching supermarket data:', error);
      }
    }

    fetchShopData();
    fetchSupermarketData();
  }, []);

  // Sample data for the updates table
  const updates = [
    { updateDate: "2024-10-20", status: "Completed", updatesDone: "List of Super Markets in Chandanagar" },
    { updateDate: "2024-10-24", status: "Completed", updatesDone: "List of Shops/shutters for rent" },
    { updateDate: "2024-10-28", status: "In Progress", updatesDone: "List of Products generally held in a Super Market" },
    { updateDate: "2024-11-01", status: "In Progress", updatesDone: "Products selling the most in Super Markets, List of Licenses and Registrations required" },
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
    <main style={{ height: '720px', display: 'flex', flexDirection: 'column', padding: '10', width: '90vw', margin: '0 auto', boxSizing: 'border-box' }}>
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
        marginTop: '40px',
        display: 'flex', 
        flexGrow: 1, 
        overflow: 'visible', 
        width: '100%', 
        height: '150vh',  
        minHeight: '60vh',  
        paddingTop: '80px',         // Create space for the fixed header
        alignItems: 'flex-start',   
        backgroundColor: 'transparent',  
        top: '1',
      }}>
        {/* Left box: Paragraphs */}
        <div style={{ 
          flexBasis: '90%',          
          padding: '10px 20px', 
          backgroundColor: '#f0f0f0', 
          overflowY: 'auto',          
          //maxHeight: 'none',
          minHeight: '100vh', // or some other value
          maxHeight: 'calc(80vh - 80px)',
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
            <p>&emsp;&emsp;1. List of supermarkets in and around Chandanagar and Hyderabad</p>
            <p>&emsp;&emsp;2. List of shops/shutters available to be occupied in and around Chandanagar and Hyderabad</p>
            <p>&emsp;&emsp;3. What products are selling the most</p>
            <p>&emsp;&emsp;4. What products a mini supermarket generally holds</p>
            <p>&emsp;&emsp;5. Client prefers non-expiring products like ladies' ornaments, etc.</p>
            <p>&emsp;&emsp;6. Client prefers a location in Chandanagar, close to their house</p>
            <p>&emsp;&emsp;7. Where to source products from: list of dealers, suppliers, stockists, and profit margins</p>
            <p>&emsp;&emsp;8. List of registrations and permissions required, along with their costs</p>
            <p>&emsp;&emsp;9. Financials: cash flow statement and balance sheet, future inflows</p>
            <p>&emsp;&emsp;&emsp;&emsp;a. GTM strategy: Grand opening of the new store</p>
            <p>&emsp;&emsp;&emsp;&emsp;b. Best ways to enter the business</p>
            <p>&emsp;&emsp;10. Cost breakdown: rent, employee salaries, infrastructure, furniture, electricity bill, new AC units</p>
            <p>&emsp;&emsp;11. Insurance for the supermarket and store</p>
            <p>&emsp;&emsp;12. Initial investment required, with a detailed breakdown</p>
            <p>&emsp;&emsp;13. Logistics and stock houses required, along with their costs</p>
            <p>&emsp;&emsp;&emsp;&emsp;a. Fast-moving products: stock management</p>
            <p>&emsp;&emsp;&emsp;&emsp;b. Ambiance maintenance: AC, scent, etc.</p>
            <p>&emsp;&emsp;&emsp;&emsp;c. Neatness: maintaining cleanliness through employees</p>
            <p>&emsp;&emsp;&emsp;&emsp;d. Festival discounts</p>
            <p>&emsp;&emsp;&emsp;&emsp;e. Combo offers: negotiating discounts with suppliers and passing them to customers</p>
            <p>&emsp;&emsp;15. Packing material: value-added packing material details</p>
            <p>&emsp;&emsp;&emsp;&emsp;a. Own packing vs. dealers packing (cost wise analysis)</p>
            <p>&emsp;&emsp;16. Swiggy, Instamart, etc. tie-up options</p>
            <p>&emsp;&emsp;17. Come up with options for in-house brands like "Karachi Bakery", etc.</p>
          </details>
          
          {/* New Expandable Section for List of supermarkets in and around Chandanagar */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>List of supermarkets in and around Chandanagar</h3>
              </span>
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc' }}>Supermarket Name</th>
                    <th style={{ border: '1px solid #ccc' }}>Address</th>
                    <th style={{ border: '1px solid #ccc' }}>Pincode</th>
                </tr>
              </thead>
              <tbody>
                    {supermarketData.length > 0 ? (
                      supermarketData.map((supermarket, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.SMname}</td>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.Adress}</td>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.Pincode1}</td>
                        </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ border: '1px solid #ccc' }}>Loading data...</td>
                  </tr>
                )}
              </tbody>
            </table>            
          </details>
          
          {/* New Expandable Section for List of rental shops/shutters */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>List of rental shops/shutters</h3>
              </span>
              </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ccc' }}>Location</th>
                  <th style={{ border: '1px solid #ccc' }}>Pincode</th>
                  <th style={{ border: '1px solid #ccc' }}>Area (in sqft)</th>
                  <th style={{ border: '1px solid #ccc' }}>Deposit</th>
                  <th style={{ border: '1px solid #ccc' }}>Total Rent</th>
                </tr>
              </thead>
              <tbody>
                {shopData.length > 0 ? (
                  shopData.map((shop, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid #ccc' }}>{shop.Location}</td>
                      <td style={{ border: '1px solid #ccc' }}>{shop.Pincode}</td>
                      <td style={{ border: '1px solid #ccc' }}>{shop.Area1}</td>
                      <td style={{ border: '1px solid #ccc' }}>{shop.Owners_Name}</td>
                      <td style={{ border: '1px solid #ccc' }}>{shop.Total_Rent}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ border: '1px solid #ccc' }}>Loading data...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </details>
          
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>List of Licenses and Registrations required</h3> (work in Progress)
              </span>
            </summary>
            <p>&emsp;&emsp;1. Shop licence from municipality</p>
            <p>&emsp;&emsp;2. Labour licence for staff</p>
            <p>&emsp;&emsp;3. Weighing machine licence</p>
            <p>&emsp;&emsp;4. GST registration if we are expecting more than 40lakhs Turnover per year</p>
            
          </details>
        </div>



        {/* Right box: Client Details */}
        <div style={{ 
          flexBasis: '20%',          
          padding: '10px 20px', 
          backgroundColor: '#e0e0e0', 
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

      {/* Updates Section */}
      <div style={{ 
        marginTop: '350px', 
        padding: '10px', 
        backgroundColor: '#f9f9f9', 
        borderTop: '1px solid #ccc' 
      }}>
        <h2 style={{ textAlign: 'center'}}>Updates</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Updates Done</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((update, index) => (
              <tr key={index}>
                <td>{update.updateDate}</td>
                <td>{update.status}</td>
                <td>{update.updatesDone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
