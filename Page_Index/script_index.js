           
               
            document.querySelector('.button-19').addEventListener('click', () => {
                document.querySelector('.menu_mobile').classList.add('active');
                document.querySelector('.close-menu').classList.add('close-menu-active');
              })
            
              
              document.querySelector('.close-menu').addEventListener('click', () => {
                document.querySelector('.menu_mobile').classList.remove('active');
                document.querySelector('.close-menu').classList.remove('close-menu-active')
              })             
                                           
           


