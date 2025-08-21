import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react"
import {useLocation} from "react-router";
import {useNavigate} from "react-router"
export const meta:() => any = () =>([
    {title:"Resumind | Auth"},
    {name:"discription", content:"Log into your account"},
])

const Auth = () => {
    const {isLoading , auth} = usePuterStore();
    const location:any = useLocation();
    const next:string[] = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect(() => {
        if(auth.isAuthenticated) { // @ts-ignore
            navigate(next);
        }
    }, [auth.isAuthenticated,next]);
    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex item-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-cnter gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log into continue your Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing in you...</p>
                            </button>
                        ):(
                            <>
                            {auth.isAuthenticated ? (
                                <button className="auth-button" onClick={auth.signOut}>
                                    <p>Log Out</p>
                                </button>
                            ):(
                                        <button className="auth-button" onClick={auth.signIn}>
                                            <p>Log In</p>
                                        </button>
                            )}
                                </>
                            )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Auth;