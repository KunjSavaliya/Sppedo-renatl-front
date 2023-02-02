

export const Navitem = [




    {
      title: "Home",
      path: "/Home",
  
      cName: "submenu",
    },
    {
      title: "About",
      path: "/About",
  
      cName: "submenu",
    },
  
    {
      title: "Popular Fleets",
      path: "/Popular",
  
      cName: "submenu",
    },
    {
      title: "Book Now",
      path: "/Book",
  
      cName: "submenu",
    },
    {
      title: "Contact",
      path: "/Contact",
  
      cName: "submenu",
    },
    {

      
      title: "Logout",
       path: "/Login",
      onclick:((e)=>{e = localStorage.removeItem('user')}),
      cName: "submenu",
    },
  ];

  // localStorage.removeItem('user');
  //   navigate("/login");