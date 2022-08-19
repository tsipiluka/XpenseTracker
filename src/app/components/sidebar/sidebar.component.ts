import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../../dashboard/dashboard.component.css']
})
export class SidebarComponent implements OnInit {
  cards: any[] | undefined;
  window:any;


  constructor() { 
    this.cards = [
      {href: "dashboard",
      icon: "grid_view",
      title: "Dashboard"
    },
    {href: "income",
    icon: "savings",
    title: "Income"
  },
  {href: "expenses",
  icon: "payments",
  title: "Expenses"
},
{href: "analytics",
icon: "insights",
title: "Analytics"
},
{href: "shares",
icon: "query_stats",
title: "Shares"
},
{href: "categories",
icon: "sell",
title: "Categories"
},
{href: "news",
icon: "newspaper",
title: "News"
},
{href: "settings",
icon: "settings",
title: "Settings"
},
{href: "logout",
icon: "logout",
title: "Logout"
}
    ]

    this.window = window.location.href;
  }



  ngOnInit(): void {
    
  }
}
