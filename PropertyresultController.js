({

fetchAllProperty : function(component, event, helper) {

helper.fetchAllPropertyHelper(component, event, helper);

},
     ownerDetailsClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var propOwnerId = eventSource.get('v.value');

        component.set('v.propOwnerId',propOwnerId);

    component.set('v.openOwnerDetails',"true"); 
    },

    closeOwnerModal : function(component, event, helper) {

    component.set('v.openOwnerDetails',"false");   

    },   

    openNegotiationDetails: function(component, event, helper) {

        var eventSource = event.getSource();

        var propId = eventSource.get('v.value');

         component.set('v.propertyId',propId);

    component.set('v.openNegotiationDetails',"true");     

    },
    closeNegotiation: function(component, event, helper) {

    component.set('v.openNegotiationDetails',"false");   

    },   
    AmountDetailsCheck:function(component, event, helper) {
     component.set('v.AmountDetailsCheck',"true");
    },
    closeAmountDetailsCheck:function(component, event, helper) {
     component.set('v.AmountDetailsCheck',"false");
    }
    
    
})
