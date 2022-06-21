({

initFilter : function(component, event, helper) {

        var locationOption =[{label:'ALL',Value:'ALL'},

                             {label:'Chennai',Value:'Chennai'},

                            {label:'Pune',Value:'Pune'},

                             {label:'Bombay',Value:'Bombay'},

                             {label:'Bangalore',Value:'Bangalore'},

                             {label:'Hyderabad',Value:'Hyderabad'},
                             
                             {label:'Kolkata',Value:'Kolkata'}];

        component.set('v.locationOptions',locationOption);

       
    var NoOfBedroomOptions=[{label:'ALL',Value:'ALL'},

                             {label:'1',Value:'1'},

                            {label:'2',Value:'2'},

                             {label:'3',Value:'3'},

                             {label:'4',Value:'4'},

                             {label:'5',Value:'5'}];
       
            component.set('v.NoOfBedroomOptions',NoOfBedroomOptions);
    
    var RatingOptions=[{label:'ALL',Value:'ALL'},

                             {label:'1',Value:'1'},

                            {label:'2',Value:'2'},

                             {label:'3',Value:'3'},

                             {label:'4',Value:'4'},

                             {label:'5',Value:'5'}];
       
            component.set('v.RatingOptions',RatingOptions);
},
    handlefilterChange:function(component,event,helper)
    {
       var filterEvent =component.getEvent("PropertyFilterEvent");
        filterEvent.setParams({
            "locationFilter":component.get ("v.location"),
            "BedroomFilter":component.get ("v.NoOfBedroom"),
            "RatingFilter":component.get ("v.Ratingfill"),
            "BudgetFilter":component.get ("v.maxBudget"),
        });
        filterEvent.fire();
        console.log('imside HandlerFilterChange');
    }

})
