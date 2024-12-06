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

type SupermarketProductData = {
  SMname: string;
  Adress: string;
  Pincode1: string;
};

type SupermarketMostsellingProductData = {
  PCname: string;
};

type PrivatebrandsData = {
  Brandname: string;
  Brandproducts: string;
};

type DistributorsData = {
  Distributername: string;
  DistributerLocation: string;
  DistributerAddress: string;
  DistributerContactno: string;
  DistributerCategoriessupplied: string;
  DistributerCatalog: string;
};

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "P Mounica",
    age: 29,
    Education: "Masters in Organic Chemistry",
    PreviousWE: "3+ years in hetero drugs",
    startDate: "2024-10-17",
    endDate: "2024-11-21"
  };

  // State for storing the fetched table data
  const [shopData, setShopData] = useState<ShopData[]>([]);
  const [supermarketData, setSupermarketData] = useState<SupermarketData[]>([]);
  const [supermarketProductData, setSupermarketProductData] = useState<SupermarketProductData[]>([]);
  const [supermarketMostsellingProductData, setSupermarketMostsellingProductData] = useState<SupermarketMostsellingProductData[]>([]);
  const [PrivatebrandsData, setPrivatebrandsData] = useState<PrivatebrandsData[]>([]);
  const [DistributorsData, setDistributorsData] = useState<DistributorsData[]>([]);

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

    async function fetchSupermarketProductData() {
      try {
        const response = await fetch('https://g4ig7ntqv1.execute-api.ap-south-1.amazonaws.com/default/pmounica_mini_supermarket_2');
        const data: SupermarketProductData[] = await response.json();
        setSupermarketProductData(data);
      } catch (error) {
        console.error('Error fetching supermarket Product data:', error);
      }
    }

    async function fetchSupermarketMostsellingProductData() {
      try {
        const response = await fetch('https://m39kaz3j2h.execute-api.ap-south-1.amazonaws.com/default/pmounica_mini_supermarket_3');
        const data: SupermarketMostsellingProductData[] = await response.json();
        setSupermarketMostsellingProductData(data);
      } catch (error) {
        console.error('Error fetching supermarket Product data:', error);
      }
    }

    
    async function fetchPrivatebrandsData() {
      try {
        const response = await fetch('https://f0sv5okep2.execute-api.ap-south-1.amazonaws.com/default/pmounica_mini_supermarket_4');
        const data: PrivatebrandsData[] = await response.json();
        setPrivatebrandsData(data);
      } catch (error) {
        console.error('Error fetching supermarket Private Brands data:', error);
      }
    }

        
    async function fetchDistributorsData() {
      try {
        const response = await fetch('https://68r0cimigk.execute-api.ap-south-1.amazonaws.com/default/pmounica_mini_supermarket_5');
        const data: DistributorsData[] = await response.json();
        setDistributorsData(data);
      } catch (error) {
        console.error('Error fetching Distributors data:', error);
      }
    }
    
    fetchShopData();
    fetchSupermarketData();
    fetchSupermarketProductData();
    fetchSupermarketMostsellingProductData();
    fetchPrivatebrandsData();
    fetchDistributorsData();
  }, []);

  // Sample data for the updates table
  const updates = [
    { updateDate: "2024-10-20", status: "Completed", updatesDone: "List of Super Markets in Chandanagar" },
    { updateDate: "2024-10-24", status: "Completed", updatesDone: "List of Shops/shutters for rent" },
    { updateDate: "2024-10-28", status: "Completed", updatesDone: "List of Products generally held in a Super Market" },
    { updateDate: "2024-11-01", status: "In Progress", updatesDone: "List of Licenses and Registrations required" },
    { updateDate: "2024-11-05", status: "In Progress", updatesDone: "Swiggy, Instamart, etc. tie-up options, Products Sourcing Leads" },
    { updateDate: "2024-11-09", status: "Completed", updatesDone: "Products selling the most in Super Markets, Options for in-house brands like 'Karachi Biscuits' etc." },
    { updateDate: "2024-11-13", status: "In Progress", updatesDone: "Insurance for the supermarket and store, Initial investment required, with a detailed breakdown" },
    { updateDate: "2024-11-17", status: "In Progress", updatesDone: "Own packing vs. dealers packing (cost wise analysis)" },
    { updateDate: "2024-11-21", status: "", updatesDone: "Final Report" },
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

          {/* New Expandable Section for List of Products generally held in a Super Market */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>List of Products generally held in a Super Market</h3>
              </span>
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc' }}>Product Category</th>
                    <th style={{ border: '1px solid #ccc' }}>Product Subcategory</th>
                    <th style={{ border: '1px solid #ccc' }}>Products</th>
                </tr>
              </thead>
              <tbody>
                    {supermarketProductData.length > 0 ? (
                      supermarketProductData.map((supermarket, index) => (
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

          {/* New Expandable Section for Products selling the most in Super Markets */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Products selling the most in Super Markets</h3>
              </span>
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc' }}>Product Category</th>
                </tr>
              </thead>
              <tbody>
                    {supermarketMostsellingProductData.length > 0 ? (
                      supermarketMostsellingProductData.map((supermarket, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.PCname}</td>
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

{/* \\============================================================================================================================           */}
{/* \\============================================================================================================================           */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>List of Licenses and Registrations required</h3> (work in Progress)
              </span>
            </summary>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>1. Shop licence from municipality</span></summary>
            <p>&emsp;&emsp;&emsp;&emsp;<u>DOCUMENTS REQUIRED:</u></p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<u>ID proof</u></p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1.	Aadhaar Card – Individual</p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2.	PAN/Incorporation Certificate - Business</p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<u>Address proof</u></p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3.	Lease Deed/Legal Occupancy</p></details>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>2. Labour licence for staff</span></summary></details>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>3. Weighing machine licence</span></summary></details>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>4. GST registration if we are expecting more than 40lakhs Turnover per year</span></summary></details>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>5. Trade License from the municipal authority</span></summary>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1.	Important Points</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(a)  It takes atleast 8 days to obtain a trade license from the local municipal authority. </p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;<u>DOCUMENTS REQUIRED:</u></p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(a) A proper front-facing photograph of the supermarket where your goods are being sold</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(b)	Aadhaar Card – Individual</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(c)	PAN Card</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(d) Photograph of the owner</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(e) Certificate of establishment</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(f) Address proof of the owner</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(g)	Premises Proof</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(h)	Bank statement</p>
                          </details>
            <details><summary style={{margin: '0px 0px 0px 50px'}}><span style={{ display: 'inline' }}>6. FSSAI certificate</span></summary>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1.	Important Points</p>
                          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(a) Needs to be renewed every 5 years. The FSSAI license gets canceled after 5 years if it is not renewed.</p></details>
            
          </details>

          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Products Sourcing Leads: list of dealers, suppliers, stockists</h3> (work in Progress)
              </span>
            </summary>
            <p>&emsp;&emsp;List of Company distributors</p>
            <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>1. HLL</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>2. ITC</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>3. Godrej</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>4. WIPRO</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>5. DABUR</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>6. P&G</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>7. MARICO</p>
              </span>
            </summary>
            </details>
                <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>8. BRITANNIA</p>
              </span>
            </summary>
            </details>
            <p>&emsp;&emsp;&emsp;1. HLL</p>
            <p>&emsp;&emsp;&emsp;2. ITC</p>
            <p>&emsp;&emsp;&emsp;3. Godrej</p>
            <p>&emsp;&emsp;&emsp;4. WIPRO</p>
            <p>&emsp;&emsp;&emsp;5. DABUR</p>
            <p>&emsp;&emsp;&emsp;6. P&G</p>
            <p>&emsp;&emsp;&emsp;7. MARICO</p>
            <p>&emsp;&emsp;&emsp;8. BRITANNIA</p>
    {/* \\============================================================================================================================           */}
  
    
              <details>
            <summary style={{margin: '0px 0px 0px 50px'}}>
              <span style={{ display: 'inline' }}>
                <p style={{ display: 'inline', margin: 0 }}>9. Local traders for Dals, pulses & Oils</p>
              </span>
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Name</th>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Location</th>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Address</th>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Contact Number</th>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Categories supplied</th>
                    <th style={{ border: '1px solid #ccc' }}>Distributer Catalogue</th>
                </tr>
              </thead>
              <tbody>
                    {DistributorsData.length > 0 ? (
                      DistributorsData.map((Distributors, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.Distributername}</td>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.DistributerLocation}</td>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.DistributerAddress}</td>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.DistributerContactno}</td>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.DistributerCategoriessupplied}</td>
                          <td style={{ border: '1px solid #ccc' }}>{Distributors.DistributerCatalog}</td>
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

{/* \\============================================================================================================================           */}                
            
          </details>
{/* \\============================================================================================================================           */}
{/* \\============================================================================================================================           */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Cost breakdown: rent, employee salaries, infrastructure, furniture, electricity bill, new AC units</h3> (work in Progress)
              </span>
            </summary>
            </details>

  {/* \\============================================================================================================================           */}
  {/* \\============================================================================================================================           */}

          {/* New Expandable Section for options for in-house brands like "Karachi Bakery", etc. */}
          <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Options for in-house brands like "Karachi Biscuits", etc.</h3>
              </span>
            </summary>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
              <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc' }}>Company Names</th>
                    <th style={{ border: '1px solid #ccc' }}>Brand products</th>
                </tr>
              </thead>
              <tbody>
                    {PrivatebrandsData.length > 0 ? (
                      PrivatebrandsData.map((supermarket, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.Brandname}</td>
                          <td style={{ border: '1px solid #ccc' }}>{supermarket.Brandproducts}</td>
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
{/* \\============================================================================================================================           */}
            <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>Swiggy, Instamart, etc. tie-up options</h3>
              </span>
            </summary>
            <p>&emsp;&emsp;&emsp;For Swiggy</p>
            <p>&emsp;&emsp;&emsp;Step 1 : Register at Swiggy partner registration page, link : https://www.swiggy.com/instamart-partner</p>
            <p>&emsp;&emsp;&emsp;Step 2 : Fill and submit the instamart partner registration form, link : https://docs.google.com/forms/d/e/1FAIpQLScC5hEe2Dbk4fH5yoN75x0_bNnA5czT4xPbem7FnJBPH08QOg/viewform </p>
            <p>&emsp;&emsp;&emsp;For Blinkit : Register at https://blinkit.com/partner </p>
            <p>&emsp;&emsp;&emsp;Blinkit Seller registration link : https://seller.blinkit.com/ </p>
          </details>

  {/* \\============================================================================================================================           */}

{/* \\============================================================================================================================           */}
            <details>
            <summary>
              <span style={{ display: 'inline' }}>
                <h3 style={{ display: 'inline', margin: 0 }}>References</h3>
              </span>
            </summary>
            <p>&emsp;&emsp;&emsp;https://www.ghmc.gov.in/Trade.aspx</p>
            <p>&emsp;&emsp;&emsp;https://vijetha.in/</p>
            <p>&emsp;&emsp;&emsp;https://ratnadeep.com/category</p>  
            <p>&emsp;&emsp;&emsp;https://moreretail.in/</p>
            <p>&emsp;&emsp;&emsp;https://www.qmart.in/categories.php</p>
            <p>&emsp;&emsp;&emsp;https://www.sparindia.com/</p>
            <p>&emsp;&emsp;&emsp;https://www.swiggy.com/instamart-partner</p>  
            <p>&emsp;&emsp;&emsp;https://www.gfreshmart.com/start-a-mini-supermarket-franchise/#:~:text=If%20you%20are%20starting%20up,if%20it%20is%20not%20renewed.</p>
              
          </details>

  {/* \\============================================================================================================================           */}
  
{/* \\============================================================================================================================           */}        
        </div>

      {/* Right box: Client Details and Final Report */}
      <div style={{ 
        flex: '1 1 25%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',
        padding: '10px', 
        // backgroundColor: '#f9f9f9',
        textAlign: 'left', 
      }}>
        {/* Client Details */}
        <div style={{ padding: '10px', backgroundColor: '#e6e6e6', borderRadius: '8px' }}>
          <h3 style={{ textAlign: 'center' }}><strong>Client Details</strong></h3>
          <p><strong>Name:</strong> {clientDetails.name}</p>
          <p><strong>Age:</strong> {clientDetails.age}</p>
          <p><strong>Education:</strong> {clientDetails.Education}</p>
          <p><strong>Previous Work Experience:</strong> {clientDetails.PreviousWE}</p>
          <p><strong>Project Start Date:</strong> {clientDetails.startDate}</p>
          <p><strong>Project End Date:</strong> {clientDetails.endDate}</p>
        </div>

        {/* Final Report */}
        <div style={{ padding: '10px', backgroundColor: '#FBCFCD', borderRadius: '8px' }}>
          <h3 style={{ textAlign: 'center' }}>Final Report</h3>
          <p><strong>Final Report :</strong> <u>download-Link</u> (work in progress).</p>
        </div>
      </div>
    </div>
          
          
          
{/* \\============================================================================================================================           */}         
  
      {/* Updates Section */}
      <div style={{ 
        marginTop: '375px', 
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
