({

fetchAllPropertyHelper : function(component, event, helper) {

var action = component.get('c.getLatestProperty');

        action.setCallback(this,function(response){

        var responseValues= response.getReturnValue();

            component.set('v.propertyList',responseValues);

            component.set('v.propertiesFound',true);

        });

        $A.enqueueAction(action,false);

},
    PropertyFilterEvent:function(component,event,helper)
    {
        var locFilter=event.getParam("locationFilter");
        var BedroomFilter=event.getParam("BedroomFilter");
        var RatingFilter=event.getParam("RatingFilter");
        var BudgetFilter=event.getParam("BudgetFilter");
        var action=component.get('c.getSearchedProperty');
        action.setParms({
            'location':locFilter,'bedroom':BedroomFilter,'Rating':RatingFilter,'maxbudget':BudgetFilter
        });
        action.setCallback(this,function(response){
            var responseValue=response.getReturnValue();
            component.set('v.propertyList',responseValue);
            component.set('v.propertiesFound',true);
        });
        $A.enqueueAction(action,false);
    }

})
