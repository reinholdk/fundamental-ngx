/**
 * Files to display in the API tab of each component.
 * Names should be without hyphens, and capitalized where hyphens occur normally.
 * Include the suffix i.e. Directive or Component.
 * Names are sorted in the ApiComponent so order does not matter.
 */
export const API_FILES = {
    actionbar: ['actionbarcomponent'],
    button: ['ButtonComponent'],
    checkbox: ['CheckboxComponent'],
    checkboxGroup: ['CheckboxGroupComponent'],
    infoLabel: ['InfoLabelComponent'],
    input: ['InputComponent'],
    link: ['LinkComponent'],
    menu: ['MenuComponent', 'MenuItemComponent', 'MenuTriggerDirective'],
    menuButton: ['MenuButtonComponent'],
    objectStatus: ['ObjectStatusComponent'],
    radioGroup: ['RadioGroupComponent'],
    searchField: ['SearchFieldComponent'],
    select: ['SelectPlatformComponent'],
    splitMenuButton: ['SplitMenuButtonComponent'],
    textarea: ['TextAreaComponent'],
    panel: [
        'PlatformPanelComponent',
        'PlatformPanelContentComponent',
        'PlatformPanelActionsComponent',
        'PlatformPanelConfig'
    ],
    switch: ['SwitchComponent'],
    stepInput: ['NumberStepInputComponent', 'StepInputComponent', 'StepInputConfig'],
    list: ['ListComponent', 'StandardListItemComponent', 'ListFooter', 'ListGroupHeader', 'ListHeader'],
    standardlistitem: ['ListComponent', 'StandardListItemComponent', 'ListFooter', 'ListGroupHeader', 'ListHeader'],
    actionlistitem: ['ListComponent', 'ActionListItemComponent'],
    displaylistitem: ['ListComponent', 'DisplayListItemComponent', 'ListFooter', 'ListGroupHeader', 'ListHeader'],
    inputlistitem: ['ListComponent', 'InputListItemComponent', 'ListFooter', 'ListGroupHeader', 'ListHeader'],
};
