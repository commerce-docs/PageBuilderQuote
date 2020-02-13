define([
    'Magento_PageBuilder/js/content-type/preview',
    'Magento_PageBuilder/js/uploader',
    'Magento_PageBuilder/js/content-type-menu/hide-show-option'
], function (
    PreviewBase,
    Uploader,
    HideShowOption
) {
    'use strict';

    var $super;

    /**
     * Quote content type preview class
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    /**
     * Modify the options returned by the content type
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function () {
        var options = $super.retrieveOptions.call(this, arguments);

        options.hideShow = new HideShowOption({
            preview: this,
            icon: HideShowOption.showIcon,
            title: HideShowOption.showText,
            action: this.onOptionVisibilityToggle,
            classes: ['hide-show-content-type'],
            sort: 40
        });

        return options;
    };

    return Preview;
});
