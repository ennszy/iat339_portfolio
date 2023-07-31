// source for hidden and shown content based on selection in dropdown https://stackoverflow.com/questions/6164507/change-the-content-of-a-div-based-on-selection-from-dropdown-menu

document.getElementById('target').addEventListener('change', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                        target = document.getElementById(this.value);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (target !== null ) {
                        target.className = 'vis';
                    }
});