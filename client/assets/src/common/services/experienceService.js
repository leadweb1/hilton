(function () {
    'use strict';

    function experienceService() {
        return {
            tab: 1,
            step: 1,
            slider: null,
            currentSlide: 1,
            data: null,
            $scope: null,
            $timeout: null,
            get: function (data, scope, timeout) {
                this.data = data;
                this.$scope = scope;
                this.$timeout = timeout;
                return this;
            },
            bezelRotateDragStart: function () {
            },
            bezelRotateDragEnd: function (event) {
                var target = angular.element(event.target).parent()[0];

                // Drag distance required (top center to left/right middle)
                var quadrantWidth = target.offsetWidth / 2;
                var quadrantHeight = target.offsetHeight / 2;
                var minDragDistance = Math.sqrt(
                        (quadrantWidth * quadrantWidth) +
                        (quadrantHeight * quadrantHeight)
                        ) * 0.6;

                if (event.distance > minDragDistance) {
                    this.step = this.step + 1;
                    this.runStep(this.tab, this.step);
                }
            },
            tapScreen: function() {
                this.step = this.step + 1;
                this.runStep(this.tab, this.step);
            },
            runStep: function (tab, step) {
                var $tab = this.data.tabs[tab - 1];
                if($tab && $tab.steps) {
                    var $step = $tab.steps[step - 1];
                    if($step) {
                        if($step.title) {
                            this.$scope.experienceTitle = $step.title;
                        }

                        if($step.description) {
                            this.$scope.experienceDescription = $step.description;
                        }

                        if (tab === this.tab && step === this.step) {
                            if ($step.timeout !== undefined) {
                                this.$timeout(function (exp) {
                                    if ($step.last === true) {
                                        if ($tab.last === true) {
                                            //alert('Done!');
                                        }
                                        else {
                                            exp.slider.slick('slickGoTo', exp.tab);
                                        }
                                    }
                                    else {
                                        exp.step = exp.step + 1;
                                        exp.runStep(exp.tab, exp.step);
                                    }
                                }.bind('exp', this).bind('$tab', $tab).bind('$step', $step), $step.timeout * 1000);
                            }
                        }
                    }
                }
            },
            startExperience: function (animate, exp) {
                if (animate === true) {
                    // Animate bezel
                }
                exp.updateTitles(exp);
                exp.runStep(exp.tab, exp.step);
            },
            initExperience: function () {
                this.tab = 1;
                this.step = 1;
                this.slider = null;
                
                // Setup slider events
                this.$timeout(function (exp) {
                    exp.slider = jQuery('.slick-slider')
                            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                var newTab = nextSlide + 1;
                                
                                if (exp.tab !== newTab) {
                                    // Reset step
                                    exp.$scope.safeApply(function () {
                                        exp.step = 1;
                                        exp.currentSlide = newTab;
                                    });
                                }
                            })
                            .on('afterChange', function (event, slick, currentSlide) {
                                var newTab = currentSlide + 1;
                                var length = exp.$scope.activeSliderMaxSlides || exp.data.tabs.length;
                                if (exp.tab !== newTab && newTab <= length) {
                                    // Change tab
                                    exp.$scope.safeApply(function () {
                                        exp.tab = newTab;
                                        exp.currentSlide = newTab;
                                        
                                        // Customize Your Gear S2
                                        if(exp.$scope.setModelTitle) {
                                            exp.$scope.setModelTitle();
                                        }
                                        if(exp.$scope.setFaceTitle) {
                                            exp.$scope.setFaceTitle();
                                        }

                                        // Fit Lifestyle - Fitness Clock
                                        if(exp.$scope.setWatchFaceInfo) {
                                            exp.$scope.setWatchFaceInfo();
                                        }
                                    });

                                    exp.startExperience(false, exp);
                                }
                            });

                    exp.startExperience(true, exp);
                }.bind('exp', this), 100);
            },
            updateTitles: function(exp) {
                var $tab = exp.data.tabs[exp.tab - 1];
                if($tab !== undefined) {
                    if($tab.steps) {
                        var $step = $tab.steps[exp.step - 1];
                        if($step !== undefined) {
                            exp.$scope.safeApply(function () {
                                exp.$scope.experienceTitle = $tab.title;
                                exp.$scope.experienceDescription = $tab.description;

                                if($step.title) {
                                    exp.$scope.experienceTitle = $step.title;
                                }

                                if($step.title) {
                                    exp.$scope.experienceDescription = $step.description;
                                }
                            });
                        }
                    }
                }
            }
        };
    }

    angular.module('common.services.experience', [])
            .factory('ExperienceService', experienceService);
})();
