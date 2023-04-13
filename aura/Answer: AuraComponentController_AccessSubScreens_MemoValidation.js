·       Ability to access the sub screens like Add, edit, Delete, view and download.      ·       Ability to download the branches as format of .csv file.      ·       To Delete the Memo click on Delete action, it will display the confirmation message for deleting the memo then click on ok.      ·       Clicking on Download Data will allow User to view the results in Excel format.      ·       The Submit and Reset buttons are given on this screen,Once User have made User selections click on Submit it will add/edit the wholesaler, or click on Reset to reset the selections to the last search.      ·       Memo should not be empty.      ·       If user has access then user able to access this page.      ·       If user didn’t have access then redirect to login page.

//Aura Component Javascript
({
    doInit : function(component, event, helper) {
        //Validate user access
        var action = component.get("c.validateUserAccess");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS') {
                var hasAccess = response.getReturnValue();
                if(hasAccess) {
                    //Get Memo details
                    var action2 = component.get('c.getMemoDetails');
                    action2.setCallback(this, function(response2) {
                        var state2 = response2.getState();
                        if(state2 === 'SUCCESS') {
                            var memoDetails = response2.getReturnValue();
                            component.set('v.memoDetails', memoDetails);
                        }
                    });
                    $A.enqueueAction(action2);
                } else {
                    //Redirect to login page
                    var urlEvent = $A.get("e.force:navigateToURL");
                    urlEvent.setParams({
                        "url": "/login"
                    });
                    urlEvent.fire();
                }
            }
        });
        $A.enqueueAction(action);
    },

    handleAddEditMemo : function(component, event, helper) {
        var memoDetails = component.get('v.memoDetails');
        var editMemo = event.getParam('editMemo');
        var index = event.getParam('index');
        if(index) {
            memoDetails[index] = editMemo;
        } else {
            memoDetails.push(editMemo);
        }
        component.set('v.memoDetails', memoDetails);
    },

    handleDeleteMemo : function(component, event, helper) {
        var memoDetails = component.get('v.memoDetails');
        var index = event.getParam('index');
        memoDetails.splice(index, 1);
        component.set('v.memoDetails', memoDetails);
    },

    handleDownloadData : function(component, event, helper) {
        var memoDetails = component.get('v.memoDetails');
        //Convert to CSV format
        //Download
    },

    handleSubmit : function(component, event, helper) {
        //Submit the data
    },

    handleReset : function(component, event, helper) {
        //Reset the data
    }
})