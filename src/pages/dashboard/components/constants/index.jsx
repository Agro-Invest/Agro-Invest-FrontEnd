import { Home, Newspaper, ReceiptCent } from "lucide-react";

export default {
  NAVLINKS: [
    {
      icon: <Home/>,
      text: "Dashboard",
      link: "/dashboard"
    },
    {
      icon: <Newspaper/>,
      text: "Project Management",
      link: "/dashboard/projectmanagement"
    },
    {
      icon: <ReceiptCent/>,
      text: "Financial Services",
      link: "/dashboard/financialservices"
    },
  ]
}