import { useAuthenticator } from '@aws-amplify/ui-react';
import './App.css'; // Assuming you have a CSS file for additional styles

function App() {
  const { signOut } = useAuthenticator();

  const clientDetails = {
    name: "P Mounica",
    age: 29,
    startDate: "2024-10-17",
    endDate: "2024-11-21"
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column' maxWidth: '1200px', margin: '0 auto' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img 
          src="https://rajanbusinessideas.com/img/logo.png" 
          alt="Company Logo" 
          style={{ width: '150px', height: 'auto', marginRight: 'auto' }} 
        />
        <button onClick={signOut} style={{ marginLeft: 'auto' }}>Sign out</button>
      </div>

        <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Left box: Paragraphs */}
        <div style={{ 
          width: '80%', 
          padding: '10px 20px 10px 10px', 
          backgroundColor: '#f0f0f0', 
          overflowY: 'auto',            // Enable scrolling for content
          maxHeight: 'calc(100vh - 100px)', // Limit height to fit within screen (header height considered)
          boxSizing: 'border-box',
          textAlign: 'left'           // Left-align text in the left box
        }}>
          <h2 style={{ textAlign: 'center'}}>Mini Super Market - Full Business Plan</h2>
          <p>
            1.	List of supermarkets in and around Chandanagar and Hyderabad 
          </p>
          <p>
            2.	List of shops/shutters available to be occupied in and around Chandanagar and Hyderabad
          </p>
          <p>
            3.	What products are selling the most
          </p>
                    <p>
            4.	What products a mini supermarket generally holds
          </p>
                    <p>
            5.	Client prefers non-expiring products like ladies' ornaments, etc.
          </p>
                    <p>
            6.	Client prefers a location in Chandanagar, close to their house
          </p>
                    <p>
            7.	Where to source products from: list of dealers, suppliers, stockists, and profit margins
          </p>
          <p>
            8.	List of registrations and permissions required, along with their costs
          </p>
                    <p>
            9.	Financials: cash flow statement and balance sheet, future inflows
          </p>
                    <p>
            &emsp;&emsp;a.	GTM strategy: Grand opening of the new store
          </p>
                    <p>
            &emsp;&emsp;b.	Best ways to enter the business
          </p>
                    <p>
            10.	Cost breakdown: rent, employee salaries, infrastructure, furniture, electricity bill, new AC units
          </p>
                    <p>
            11.	Insurance for the supermarket and store
          </p>
                    <p>
            12.	Initial investment required, with a detailed breakdown
          </p>
                    <p>
            13.	Logistics and stock houses required, along with their costs
          </p>
                    <p>
            &emsp;&emsp;a.	Fast-moving products: stock management
          </p>
          
                    <p>
            &emsp;&emsp;b.	Ambiance maintenance: AC, scent, etc.
          </p>
          
                    <p>
            &emsp;&emsp;c.	Neatness: maintaining cleanliness through employees
          </p>
          
                    <p>
            &emsp;&emsp;d.	Festival discounts
          </p>
          
                    <p>
            &emsp;&emsp;e.	Combo offers: negotiating discounts with suppliers and passing them to customers
          </p>
          
                    <p>
            15.	Packing material: value added packing material details – 
          </p>
          
                    <p>
            &emsp;&emsp;a.	Own packing vs. dealers packing (cost wise analysis)
          </p>
          
                    <p>
            16.	Swiggy, instamart , etc. tieup options
          </p>
          
                    <p>
            17.	Come up with options for inhouse brands like “karachi Bakery” , etc.
          </p>
        </div>

        {/* Right box: Client Details */}
        <div style={{ 
          width: '35%', 
          padding: '10px 20px', 
          backgroundColor: '#e0e0e0', 
          height: '100%',                // Take up full height
          boxSizing: 'border-box',       // Ensure padding doesn't affect height
          textAlign: 'left'           // Left-align text in the right box
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
