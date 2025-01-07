import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Painel da Dashboard"
}

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <>
            <h3>Header do dashboard</h3>
            <br/>
            {children}
        </>
    )

}