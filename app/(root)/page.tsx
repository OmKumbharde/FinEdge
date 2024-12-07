import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'Om', lastName: 'Kumbharde', email:'om@gmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.firstName || 'Guest'}
                        subtext="Access and Manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                    accounts={[]} 
                    totalBanks={1} 
                    totalCurrentBalance={1250.20} />

                    
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user= {loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 124.50}, { currentBalance: 124.90}]}
            />
        </section>

    )
}

export default Home;
