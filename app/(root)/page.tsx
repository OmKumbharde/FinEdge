import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
    const loggedIn =  await getLoggedInUser();

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
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
