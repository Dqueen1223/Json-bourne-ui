export default function validateForm(deliveryData, billingData, checked) {
    errors = {};
    for (const key in deliveryData) {
        if (key !== street2 && (deliveryData[key] === undefined || deliveryData[key].trim() === '')) {
            if (key === firstName) {
                errors.firstName = 'The first name field is required'
            }
            if (key === lastName) {
                errors.lastName = 'The last name field is required'
            }
            if (key === street) {
                errors.street = 'The street field is required'
            }
            if (key === city) {
                errors.city = 'The city field is required'
            }
            if (key === state) {
                errors.state = 'The state field is required'
            }
            if (key === zip) {
                errors.zip = 'The zip field is required'
            }
        }
            
    }
    if (checked) {
        for (const key in deliveryData) {
            if (key !== Street2 && (deliveryData[key] === undefined || deliveryData[key].trim() === '')) {
                if (key === street) {
                    errors.billingStreet = 'The street field is required'
                }
                if (key === city) {
                    errors.billingCity = 'The city field is required'
                }
                if (key === state) {
                    errors.billingState = 'The state field is required'
                }
                if (key === zip) {
                    errors.billingZip = 'The zip field is required'
                }
            }
        }
    }
    if (!checked) {
        for (const key in billingData) {
            if (key !== billingStreet2 && (billingData[key] === undefined || billingData[key].trim() === '')) {
                if (key === billingStreet) {
                    errors.billingStreet = 'The street field is required'
                }
                if (key === billingCity) {
                    errors.billingCity = 'The city field is required'
                }
                if (key === billingState) {
                    errors.billingState = 'The state field is required'
                }
                if (key === billingZip) {
                    errors.billingZip = 'The zip field is required'
                }
            }
        }
    }
    for (const key in billingData) {
        if (key !== billingStreet2 && (billingData[key] === undefined || billingData[key].trim() === '')) {
            if (key === email) {
                errors.email = 'The email field is required'
            }
            if (key === phone) {
                errors.phone = 'The phone field is required'
            }
            if (key === creditCard) {
                errors.creditCard = 'The credit card field is required'
            }
            if (key === cvv) {
                errors.cvv = 'The cvv field is required'
            } 
            if (key === expiration) {
                errors.expiration = 'The expiration field is required'
            }
            if (key === cardholder) {
                errors.cardholder = 'The cardholder field is required'
            }
        }
    }
}