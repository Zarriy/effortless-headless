import Header from "./header";


export default function Layout({children, menu}){
return(
    <>
        <Header />
        {children}
    </>
)

}