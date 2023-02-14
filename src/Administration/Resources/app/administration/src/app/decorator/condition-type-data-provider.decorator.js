const { Application, Feature } = Shopware;

/**
 * @package business-ops
 */
Application.addServiceProviderDecorator('ruleConditionDataProviderService', (ruleConditionService) => {
    ruleConditionService.addCondition('dateRange', {
        component: 'sw-condition-date-range',
        label: 'global.sw-condition.condition.dateRangeRule.label',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('timeRange', {
        component: 'sw-condition-time-range',
        label: 'global.sw-condition.condition.timeRangeRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('customerOrderCount', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.orderCountRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerDaysSinceLastOrder', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.daysSinceLastOrderRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('salesChannel', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.salesChannelRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('currency', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.currencyRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('language', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.languageRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('cartTaxDisplay', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.cartTaxDisplay.label',
        scopes: ['cart'],
        group: 'general',
    });
    ruleConditionService.addCondition('customerBillingCountry', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.billingCountryRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerBillingStreet', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.billingStreetRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerBillingZipCode', {
        component: 'sw-condition-billing-zip-code',
        label: 'global.sw-condition.condition.billingZipCodeRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerCustomerGroup', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerGroupRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerTag', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerTagRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerCustomerNumber', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerNumberRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerDifferentAddresses', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.differentAddressesRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerEmail', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.emailRule.label',
        scopes: ['checkout'],
        group: 'customer',
    });
    /** @major-deprecated tag:v6.6.0 - This rule will be removed. Use customerDaysSinceFirstLogin instead. */
    if (!Feature.isActive('v6.6.0.0')) {
        ruleConditionService.addCondition('customerIsNewCustomer', {
            component: 'sw-condition-generic',
            label: 'global.sw-condition.condition.isNewCustomerRule',
            scopes: ['checkout'],
            group: 'customer',
        });
    }
    ruleConditionService.addCondition('customerLastName', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.lastNameRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerIsCompany', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.isCompanyRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerIsGuest', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.isGuestRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerIsNewsletterRecipient', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.isNewsletterRecipient',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerShippingCountry', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.shippingCountryRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerShippingStreet', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.shippingStreetRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerShippingZipCode', {
        component: 'sw-condition-shipping-zip-code',
        label: 'global.sw-condition.condition.shippingZipCodeRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerLoggedIn', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerLoggedInRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('customerBillingCity', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.billingCityRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerBillingState', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.billingStateRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerIsActive', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerIsActiveRule',
        scopes: ['global'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerShippingCity', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.shippingCityRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerShippingState', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.shippingStateRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerAge', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerAgeRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerDaysSinceLastLogin', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerDaysSinceLastLogin',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerDaysSinceFirstLogin', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerDaysSinceFirstLogin',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerAffiliateCode', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerAffiliateCodeRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('customerCampaignCode', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerCampaignCodeRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('cartCartAmount', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.cartAmountRule',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartPositionPrice', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.cartPositionPrice',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartGoodsCount', {
        component: 'sw-condition-goods-count',
        label: 'global.sw-condition.condition.goodsCountRule',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartTotalPurchasePrice', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.cartTotalPurchasePrice',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartGoodsPrice', {
        component: 'sw-condition-goods-price',
        label: 'global.sw-condition.condition.goodsPriceRule',
        scopes: ['cart'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemOfType', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemOfTypeRule.label',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItem', {
        component: 'sw-condition-line-item',
        label: 'global.sw-condition.condition.lineItemRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemsInCartCount', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.lineItemsInCartCountRule',
        scopes: ['cart'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemTotalPrice', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemTotalPriceRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemUnitPrice', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemUnitPriceRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemWithQuantity', {
        component: 'sw-condition-line-item-with-quantity',
        label: 'global.sw-condition.condition.lineItemWithQuantityRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartHasDeliveryFreeItem', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.hasDeliveryFreeItemRule',
        scopes: ['cart'],
        group: 'item',
    });
    ruleConditionService.addCondition('dayOfWeek', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.dayOfWeekRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('cartWeight', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.weightOfCartRule',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartVolume', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.volumeOfCartRule',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartShippingCost', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.cartShippingCost',
        scopes: ['cart'],
        group: 'cart',
    });
    ruleConditionService.addCondition('cartLineItemTag', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemTagRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('alwaysValid', {
        component: 'sw-condition-is-always-valid',
        label: 'global.sw-condition.condition.alwaysValidRule',
        scopes: ['global'],
        group: 'general',
    });
    ruleConditionService.addCondition('cartLineItemProperty', {
        component: 'sw-condition-line-item-property',
        label: 'global.sw-condition.condition.lineItemPropertyRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemIsNew', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemIsNewRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemOfManufacturer', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemOfManufacturerRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemPurchasePrice', {
        component: 'sw-condition-line-item-purchase-price',
        label: 'global.sw-condition.condition.lineItemPurchasePriceRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemCreationDate', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemCreationDateRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemReleaseDate', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemReleaseDateRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemClearanceSale', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemClearanceSale',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemPromoted', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemPromotedRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemInCategory', {
        component: 'sw-condition-line-item-in-category',
        label: 'global.sw-condition.condition.lineItemInCategoryRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemInProductStream', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemInProductStreamRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemTaxation', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemTaxationRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemDimensionWidth', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemDimensionWidthRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemDimensionHeight', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemDimensionHeightRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemDimensionLength', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemDimensionLengthRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemDimensionWeight', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemDimensionWeightRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemDimensionVolume', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemDimensionVolumeRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemListPrice', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemListPriceRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemListPriceRatio', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemListPriceRatioRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemCustomField', {
        component: 'sw-condition-line-item-custom-field',
        label: 'global.sw-condition.condition.lineItemCustomFieldRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemStock', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemStockRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('cartLineItemActualStock', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemActualStockRule',
        scopes: ['lineItem'],
        group: 'item',
    });
    ruleConditionService.addCondition('customerCustomField', {
        component: 'sw-condition-customer-custom-field',
        label: 'global.sw-condition.condition.customerCustomFieldRule',
        scopes: ['checkout'],
        group: 'customer',
    });
    ruleConditionService.addCondition('paymentMethod', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.paymentMethodRule',
        scopes: ['cart'],
        group: 'cart',
    });

    ruleConditionService.addCondition('shippingMethod', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.shippingMethodRule',
        scopes: ['cart'],
        group: 'cart',
    });

    ruleConditionService.addCondition('cartLineItemGoodsTotal', {
        component: 'sw-condition-line-item-goods-total',
        label: 'global.sw-condition.condition.lineItemGoodsTotalRule',
        scopes: ['lineItem'],
        group: 'cart',
    });

    ruleConditionService.addCondition('customerOrderTotalAmount', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.orderTotalAmountRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('promotionLineItem', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.promotionLineItemRule',
        scopes: ['cart'],
        group: 'promotion',
    });

    ruleConditionService.addCondition('promotionCodeOfType', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.promotionCodeOfType',
        scopes: ['cart'],
        group: 'promotion',
    });

    ruleConditionService.addCondition('promotionsInCartCount', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.promotionsInCartCountRule',
        scopes: ['cart'],
        group: 'promotion',
    });

    ruleConditionService.addCondition('promotionValue', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.promotionValueRule',
        scopes: ['cart'],
        group: 'promotion',
    });

    ruleConditionService.addCondition('customerBirthday', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerBirthdayRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('customerCreatedByAdmin', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerCreatedByAdminRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('customerSalutation', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.customerSalutationRule',
        scopes: ['checkout'],
        group: 'customer',
    });

    ruleConditionService.addCondition('cartLineItemProductStates', {
        component: 'sw-condition-generic-line-item',
        label: 'global.sw-condition.condition.lineItemProductStates',
        scopes: ['lineItem'],
        group: 'item',
    });

    ruleConditionService.addCondition('orderTag', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.orderTagRule',
        scopes: ['flow'],
        group: 'flow',
    });

    ruleConditionService.addCondition('orderDeliveryStatus', {
        component: 'sw-condition-generic',
        label: 'global.sw-condition.condition.orderDeliveryStatusRule',
        scopes: ['flow'],
        group: 'flow',
    });

    ruleConditionService.addAwarenessConfiguration(
        'personaPromotions',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
                'cartShippingCost',
            ],
            equalsAny: [
                ...ruleConditionService.getRestrictionsByGroup('customer'),
                'alwaysValid',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.personaPromotions',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'orderPromotions',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
                'cartShippingCost',
            ],
            equalsAny: [
                ...ruleConditionService.getRestrictionsByGroup('customer'),
                'alwaysValid',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.orderPromotions',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'cartPromotions',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
                'cartShippingCost',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.cartPromotions',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'promotionSetGroups',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
                'cartShippingCost',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.promotionSetGroups',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'promotionDiscounts',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
                'cartShippingCost',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.promotionDiscounts',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'shippingMethodPriceCalculations',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.shippingMethodPriceCalculations',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'shippingMethodPrices',
        {
            notEquals: [
                'cartCartAmount',
                'customerIsActive',
                'orderTag',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.shippingMethodPrices',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'productPrices',
        {
            notEquals: [
                'customerIsActive',
                'orderTag',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.productPrices',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'shippingMethods',
        {
            notEquals: [
                'customerIsActive',
                'orderTag',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.shippingMethods',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'paymentMethods',
        {
            notEquals: [
                'customerIsActive',
                'orderTag',
            ],
            snippet: 'sw-restricted-rules.restrictedAssignment.paymentMethods',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.before.login',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'customer', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.checkout_customer_before_login',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.login',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_login',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.logout',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_logout',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.deleted',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_deleted',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.user.recovery.request',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.user_recovery_request',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.changed-payment-method',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_changed-payment-method',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.checkout.order.placed',
        {
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer', 'cart', 'item', 'promotion'),
            scopes: ['global', 'customer', 'cart', 'item', 'promotion'],
            snippet: 'global.businessEvents.checkout_order_placed',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.order.payment_method.changed',
        {
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer', 'cart', 'item', 'promotion'),
            scopes: ['global', 'customer', 'cart', 'item', 'promotion'],
            snippet: 'global.businessEvents.checkout_order_payment_method_changed',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.customer.recovery.request',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.customer_recovery_request',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.double_opt_in_registration',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_double_opt_in_registration',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.double_opt_in_guest_order',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_double_opt_in_guest_order',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.customer.group.registration.accepted',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.customer_group_registration_accepted',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.customer.group.registration.declined',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.customer_group_registration_declined',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.register',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'customer'),
            scopes: ['global', 'customer'],
            snippet: 'global.businessEvents.checkout_customer_register',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.checkout.customer.guest_register',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.checkout_customer_guest_register',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.contact_form.send',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.contact_form_send',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.mail.after.create.message',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.mail_after_create_message',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.mail.before.send',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.mail_before_send',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.mail.sent',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.mail_sent',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.newsletter.confirm',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.newsletter_confirm',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.newsletter.register',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.newsletter_register',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.newsletter.update',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.newsletter_update',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.newsletter.unsubscribe',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.newsletter_unsubscribe',
        },
    );

    ruleConditionService.addAwarenessConfiguration(
        'flowTrigger.product_export.log',
        {
            notEquals: ruleConditionService.getRestrictionsByGroup('cart', 'item', 'promotion', 'customer'),
            equalsAny: ruleConditionService.getRestrictionsByGroup('general'),
            scopes: ['global'],
            snippet: 'global.businessEvents.product_export_log',
        },
    );

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_paid',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_paid',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_refunded_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_refunded_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_chargeback',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.paid', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_chargeback',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.paid', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_paid_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.refunded_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_paid_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.refunded_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_failed',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.chargeback', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_failed',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.chargeback', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_reminded',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.paid_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_reminded',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.paid_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_authorized',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.failed', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_authorized',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.failed', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.reminded', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.reminded', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_refunded',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.authorized', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_refunded',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.authorized', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_in_progress',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.cancelled', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_in_progress',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.cancelled', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_returned_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.refunded', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_returned_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.refunded', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_returned',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_transaction.state.in_progress', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_returned',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_transaction.state.in_progress', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.returned_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.returned_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.returned', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.returned', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_shipped',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.cancelled', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_returned_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.cancelled', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_delivery_state_shipped_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_shipped_partially',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_delivery_state_shipped',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.shipped', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_state_in_progress',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.shipped', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_state_in_progress',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order_delivery.state.shipped_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_state_completed',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order_delivery.state.shipped_partially', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_state_completed',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order.state.in_progress', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order.state.in_progress', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_state_open',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order.state.completed', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order.state.completed', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_state_cancelled',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_enter.order.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_enter_order_transaction_state_unconfirmed',
    });

    ruleConditionService.addAwarenessConfiguration('flowTrigger.state_leave.order.state.open', {
        equalsAny: ruleConditionService.getRestrictionsByGroup('general', 'cart', 'item', 'promotion', 'customer', 'flow'),
        scopes: ['global', 'cart', 'item', 'promotion', 'customer', 'flow'],
        snippet: 'global.businessEvents.state_leave_order_transaction_state_unconfirmed',
    });

    return ruleConditionService;
});
