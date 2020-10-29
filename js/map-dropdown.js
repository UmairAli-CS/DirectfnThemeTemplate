(function ($) {
    "use strict";

    //Navigation
    var app = function () {

        // Start Initialization of Office Map
        var map_RIYADH = undefined;
        var map_COLOMBO = undefined;
        var map_LAHORE = undefined;
        var map_CAIRO = undefined;
        var map_DUBAI = undefined;
        var map_KUWAIT = undefined;
        var map_CASABLANCA = undefined;
        // End Initialization of Office Map

        var officeStatusInformation = undefined;
        var officeDropDown = undefined;
        var officeMapView = undefined;
        
        var init = function init() {

            officeDropDown = document.getElementById('office-area'); // Dropdown Id to Change Office Location
            officeStatusInformation = document.querySelector('.office-status'); // Child tags Contain Informations
            officeMapView = document.querySelector('.offices-map'); // Map Displayed Div

            applyListeners();
        };
        var applyListeners = function applyListeners() {
            if (officeDropDown != null) {
                officeDropDown.addEventListener('change', function () {
                    // console.log(officeDropDown.value);
                    return toggleMapView(officeDropDown.value);
                });
            }
        };

        // office-type
        // office-name
        // office-location

        var toggleMapView = function toggleMapView(office_location_name) {

            // Start Assigning of Office Map
            var map_RIYADH = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.1462852350296!2d46.71552061431632!3d24.687497558249476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038672b4bca9%3A0xa9d8159a68c371e1!2sRashid%20Al%20Ballaa%20Building%2C%20Al%20Wizarat%2C%20Riyadh%2012622%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1603890868827!5m2!1sen!2s'
            var map_COLOMBO = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7760973167988!2d79.85681601409536!3d6.917350620380055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc677e5abff%3A0x84b451bdc1ae3d6a!2sDirectFN%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1603890522562!5m2!1sen!2s';
            var map_LAHORE = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.702387909698!2d74.26716261448097!3d31.449859257768644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190156f35ae0a7%3A0x572d5e66777e546f!2sDirectFN%20Lahore!5e0!3m2!1sen!2s!4v1603891015487!5m2!1sen!2s';
            var map_CAIRO = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.9644031703515!2d31.32714491444388!3d30.066554824484164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e4191cd9d9b%3A0xf5c405ae2ac25d93!2s22%20Anwar%20Al%20Mofti%2C%20Al%20Manteqah%20Al%20Oula%2C%20Nasr%20City%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2s!4v1603891096617!5m2!1sen!2s';
            var map_DUBAI = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6676047545916!2d55.14744541432471!3d25.07925284263137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7bf055555%3A0x8b28d1d2321fcbf1!2s1%20lake%20plaza%2C%20T%20cluster%2C%20JLT!5e0!3m2!1sen!2s!4v1603891153565!5m2!1sen!2s';
            var map_KUWAIT = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.853940959234!2d47.97677021442605!3d29.374565556861075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84bbfd99e7ef%3A0xcbc17824b16bfea1!2sMubarak%20Al%20Kabeer%20St%2C%20Al%20Kuwayt%2C%20Kuwait!5e0!3m2!1sen!2s!4v1603891201141!5m2!1sen!2s';
            var map_CASABLANCA = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424371.1249038326!2d-7.5130996069217195!3d33.80200434412672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2bd5b911647%3A0xec26ae4d2d42e0a3!2sFractal%20Markets!5e0!3m2!1sen!2s!4v1603891309114!5m2!1sen!2s';
            // End Assigning of Office Map
            
            if (office_location_name != null) {
                if (office_location_name == "COLOMBO") {

                if(officeMapView != null)
                  {
                    officeMapView.querySelector(':scope > iframe').src = map_COLOMBO;
                  }

                  if(officeStatusInformation != null)
                  {
                    return ChangeOfficeInformation('SOFT. DEV. CENTER', office_location_name, 'DFN Technology (Pvt) Ltd. Level 10, Parkland, No. 33, Colombo 04, Sri Lanka');
                  }
                  
                }
                else if (office_location_name == "LAHORE") {
   
                if(officeMapView != null)
                  {
                    officeMapView.querySelector(':scope > iframe').src = map_LAHORE;
                  }

                  if(officeStatusInformation != null)
                  {
                    return ChangeOfficeInformation('SOFT. DEV. CENTER', office_location_name, '2nd Floor, 15 GCP Society, Johar Town, Pakistan');
                  }
                  
                }
                else if (office_location_name == "CAIRO") {
   
                    if(officeMapView != null)
                    {
                      officeMapView.querySelector(':scope > iframe').src = map_CAIRO;
                    }
  
                    if(officeStatusInformation != null)
                    {
                      return ChangeOfficeInformation('CONTENT / DEV. CENTER', office_location_name, '22 A Anwar El Mofty Street, Tiba 2000 Administrative Building, First district, Nasr City, Egypt');
                    }
                    
                }
                else if (office_location_name == "DUBAI") {
   
                    if(officeMapView != null)
                    {
                      officeMapView.querySelector(':scope > iframe').src = map_DUBAI;
                    }
  
                    if(officeStatusInformation != null)
                    {
                      return ChangeOfficeInformation('', office_location_name, 'Office 1004, One Lake Plaza, Cluster T, JLT, United Arab Emirates');
                    }
                    
                }
                else if (office_location_name == "KUWAIT") {
   
                    if(officeMapView != null)
                    {
                      officeMapView.querySelector(':scope > iframe').src = map_KUWAIT;
                    }
  
                    if(officeStatusInformation != null)
                    {
                      return ChangeOfficeInformation('', office_location_name, 'Building Floor 4, Kuwait Sharq Mubarak, Al Kabeer Street, Al Muzini Kuwait');
                    }
                    
                }
                else if (office_location_name == "CASABLANCA") {
   
                    if(officeMapView != null)
                    {
                      officeMapView.querySelector(':scope > iframe').src = map_CASABLANCA;
                    }
  
                    if(officeStatusInformation != null)
                    {
                      return ChangeOfficeInformation('', office_location_name, 'Fractal Markets 193, Avenue Hassan II- 5ème étage-Bureau N°9. BP 2014 Morocco');
                    }
                    
                }
                else {
   
                    if(officeMapView != null)
                    {
                      officeMapView.querySelector(':scope > iframe').src = map_RIYADH;
                    }
  
                    if(officeStatusInformation != null)
                    {
                      return ChangeOfficeInformation('HEAD OFFICE', office_location_name, 'Suite 407, 4th Floor, Rashid Al Ballaa Building, King Abdulaziz Road, Saudi Arabia');
                    }
                    
                }
            }
        };

        var ChangeOfficeInformation = function ChangeOfficeInformation(office_type, office_location_name, office_location_address) {
            
                if(officeStatusInformation.querySelector(':scope > #office-type') != null)
                {
                    officeStatusInformation.querySelector(':scope > #office-type').innerHTML = office_type;
                }
                else{
                    officeStatusInformation.querySelector(':scope > #office-type').innerHTML = "";
                }

                if(officeStatusInformation.querySelector(':scope > #office-name') != null)
                {
                    officeStatusInformation.querySelector(':scope > #office-name').innerHTML = office_location_name;
                }
                else{
                    officeStatusInformation.querySelector(':scope > #office-name').innerHTML = "";
                }

                if(officeStatusInformation.querySelector(':scope > ul > #office-location') != null)
                {
                    officeStatusInformation.querySelector(':scope > ul > #office-location').innerHTML = office_location_address;
                }
                else{
                    officeStatusInformation.querySelector(':scope > ul > #office-location').innerHTML = "";
                }
            
        };

        init();
    }();

})(jQuery);