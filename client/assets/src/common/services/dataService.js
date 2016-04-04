(function () {
    'use strict';

    function dataService() {
        return {
            config: {
                rotatingBezelLeft: 'src/common/templates/rotating-bezel-left.tpl.html',
                rotatingBezelRight: 'src/common/templates/rotating-bezel-right.tpl.html',
                tapScreen: 'src/common/templates/tap-screen.tpl.html',
                experienceEnd: 'src/common/templates/experience-end.tpl.html',
            },
            content: {
                sections: {
                    'aestheticElegantDesign': {
                        name: 'aesthetic-elegant-design',
                        title: 'Aesthetic and Elegant Design',
                        description: 'Gear S2 comes full circle with a durable stainless steel body that sits slim and sleek on your wrist. Enjoy the perfect harmony between technology and design.',
                        route: 'root.aesthetic-elegant-design',
                        sections: {
                            'stylishSmartGear': {
                                name: 'stylish-smart-gear',
                                title: 'Stylish Smart Gear',
                                route: 'root.aesthetic-elegant-design_stylish-smart-gear',
                                experience: {
                                    tabs: [
                                        {
                                            name: 'gears2',
                                            title: 'Gear S2',
                                            defaultColor: 'black',
                                            colors: {
                                                'black': {
                                                    name: 'black',
                                                    title: 'Dark Grey',
                                                    color: '#343434',
                                                    imagePrefix: 'gear2_sports_black',
                                                    imageCount: 66,
                                                },
                                                'silver': {
                                                    name: 'silver',
                                                    title: 'Silver',
                                                    color: '#D9D9D9',
                                                    imagePrefix: 'gear2_sports_white',
                                                    imageCount: 66,
                                                },
                                            },
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ]
                                        },
                                        {
                                            name: 'gears2classic',
                                            title: 'Gear S2 Classic',
                                            defaultColor: 'classicblack',
                                            colors: {
                                                'classicblack': {
                                                    name: 'classicblack',
                                                    title: 'Black',
                                                    color: '#000000',
                                                    imagePrefix: 'gear2_classinc_black',
                                                    imageCount: 66,
                                                },
                                            },
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ]
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'intuitiveExperience': {
                        name: 'intuitive-experience',
                        title: 'Intuitive Experience',
                        description: 'Gear S2 provides an analogue-inspired, circular interface for easier navigation.\nWith the rotating bezel, you can navigate quickly, precisely, and clearly without blocking the screen with fingers.',
                        route: 'root.intuitive-experience',
                        sections: {
                            'rotatingBezel': {
                                name: 'rotating-bezel',
                                title: 'Rotating Bezel',
                                route: 'root.intuitive-experience_rotating-bezel',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Horizontal Navigation',
                                            description: 'Rotate the bezel to navigate left and right.',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Vertical Navigation',
                                            description: 'Rotate the bezel to navigate up and down.',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Circular Navigation',
                                            description: 'Rotate the bezel to browse options.',
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Volume Control',
                                            description: 'Rotate the bezel to change volumes.',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'healthierLifestyle': {
                        name: 'healthier-lifestyle',
                        title: 'Fit Lifestyle',
                        route: 'root.healthier-lifestyle',
                        sections: {
                            'trackYourHealth': {
                                name: 'track-your-health',
                                title: 'Track Your Fitness',
                                description: 'Gear S2 comes full circle with a durable stainless steel body that sits slim and sleek on your wrist.',
                                route: 'root.healthier-lifestyle_track-your-health',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Auto Tracking',
                                            description: 'Gear S2 automatically detects your movement, exercise, \nand heart rate. It recognizes your activity level and also \nmotivates you to move more to stay fit.',
                                            steps: [
                                                { // start
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // bg1
                                                    timeout: 2,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // Time to get moving
                                                    timeout: 2,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // bg1
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // tap
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // bg2
                                                    timeout: 2,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // Good job
                                                    timeout: 2,
                                                    bgClass: 'bg bg2 blured',
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Exercise',
                                            description: 'Before working out, set your goals. Gear S2 will notify you \nwhen you reach your goal and record your fitness data.',
                                            steps: [
                                                { // start, 1
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // bg1
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // spinner
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // tap, 4
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // start screen
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // tap, 6
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // start screen
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // start screen
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // start screen
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // start screen
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                { // tap, bg2, left foot, 11
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, right foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, left foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, right foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, left foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, right foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, left foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, right foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, left foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, right foot
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                { // tap, bg2, left foot, 21
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg2 clear',
                                                },
                                                {
                                                    timeout: 2,
                                                    bgClass: 'bg bg1 blured',
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Heart Rate',
                                            description: 'With Gear S2, you can check the heart rate \nand see the record on a chart.',
                                            last: true,
                                            steps: [
                                                { // start
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                {
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                {
                                                    timeout: 1,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // tap
                                                    userActionRequired: true,
                                                    bgClass: 'bg bg1 clear',
                                                },
                                                { // heartbeat
                                                    timeout: 6,
                                                    bgClass: 'bg bg1 blured',
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    timeout: 2,
                                                    bgClass: 'bg bg1 blured',
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'activityLog': {
                                name: '24h-activity-log',
                                title: '24H Activity Log',
                                description: 'Track your activity throughout the day and easily identify the types of activity by different colours.',
                                route: 'root.healthier-lifestyle_24h-activity-log',
                                experience: {
                                    tabs: [
                                        {
                                            title: '24H Activity Log',
                                            description: 'Review summaries of your daily movements to stay fit.\nThe 24H Activity Log measures all your movements during the day.',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'healthClock': {
                                name: 'health-clock',
                                title: 'Fitness Clock',
                                description: 'Gear S2 encourages an active lifestyle with the fitness related watch faces. Check the screen on the Gear S2 to see if you are getting enough exercise.',
                                route: 'root.healthier-lifestyle_health-clock',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Activity Bubbles',
                                            description: 'As you move more,\nthe coloful circle grows bigger',
                                            imageId: '07',
                                        },
                                        {
                                            title: 'Activity Sparkles',
                                            description: 'More particles appear\nwhen you move',
                                            imageId: '11',
                                            default: true,
                                        },
                                        {
                                            title: 'Pixel Heart',
                                            description: 'Heart shape changes colour\ndepending on your HR status',
                                            imageId: '09',
                                        },
                                        {
                                            title: 'Heart Wave',
                                            description: 'Measured heart rate records appears\n(Average/Minimum/Maximum)',
                                            imageId: '08',
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'convenienceMore': {
                        name: 'convenience-more',
                        title: 'Convenience & More',
                        route: 'root.convenience-more',
                        sections: {
                            'notifications': {
                                name: 'notifications',
                                title: 'Notifications',
                                route: 'root.convenience-more_notifications',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Check Messages',
                                            description: 'Gear S2 provides quick and easy access to notifications. From the\nwatch face, turn the bezel to the left to check your notifications.',
                                            steps: [
                                                {
                                                    title: 'Check Messages',
                                                    description: 'Gear S2 provides quick and easy access to notifications. From the\nwatch face, turn the bezel to the left to check your notifications.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Send Messages',
                                            description: 'Gear S2 gives you four different ways\nto respond to messages from your wrist.',
                                            last: true,
                                            steps: [
                                                {
                                                    name: 'send-messages',
                                                    title: 'Send Messages', // 1
                                                    description: 'Gear S2 gives you four different ways\nto respond to messages from your wrist.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    name: 'presets',
                                                    title: 'Presets', // 3
                                                    description: 'Turn the bezel to select preset texts.\nYou can also add more presets from your phone.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    name: 'voice-input',
                                                    title: 'Voice Input', // 7
                                                    description: 'Select the S Voice icon to write messages\nwith your voice.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    name: 'emoticons',
                                                    title: 'Emoticon', // 15
                                                    description: 'Choose from a variety of emoticons\nto send quick messages.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    timeout: 1.5,
                                                },
                                                { // Change screen
                                                    name: 'keypads',
                                                    title: 'Keypads', // 25
                                                    description: 'Gear S2 also has a keypad to let you type\nmessages without taking out your phone.',
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Animate bezel
                                                    timeout: 1,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                { // Change screen
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 0.5,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'samsungPay': {
                                name: 'samsung-pay',
                                title: 'Samsung Pay',
                                route: 'root.convenience-more_samsung-pay',
                                disabled: true,
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Samsung Pay',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    timeout: 1,
                                                },
                                                {
                                                    userActionRequired: true,
                                                },
                                                {
                                                    timeout: 2,
                                                },
                                                {
                                                    timeout: 2,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'additionalFeatures': {
                                name: 'additional-features',
                                title: 'Additional Features',
                                route: 'root.convenience-more_additional-features',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Compatibility',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: 'Wireless Charging',
                                            description: 'Bla bla',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                        {
                                            title: '3G Connectivity',
                                            description: 'Bla bla',
                                            disabled: true,
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            'accessories': {
                                name: 'accessories',
                                title: 'Accessories',
                                description: 'Gear S2 provides a range of watch faces and watchbands that completes your personal style.\nA special collection from Italian designer Alessandro Mendini brings his taste, humor, and sense of colour to the Gear S2.',
                                route: 'root.convenience-more_accessories',
                                experience: {
                                    tabs: [
                                        {
                                            title: 'Accessories',
                                            description: 'For every occasion, you can find the ideal\nwatch band to match your style.',
                                            last: true,
                                            steps: [
                                                {
                                                    userActionRequired: true,
                                                    last: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    'customizeYourGear': {
                        name: 'customize-your-gear',
                        title: 'Customize your Gear S2',
                        description: 'You can transform the look of your Gear S2 by choosing from a wide variety of watch face and band options.\nTry on different designs, just like you mix and match your outfits everyday.',
                        route: 'root.customize-your-gear',
                        experience: {
                            tabs: [
                                {
                                    title: 'Customize your Gear S2',
                                    description: 'Bla bla',
                                    last: true,
                                    steps: [
                                        {
                                            userActionRequired: true,
                                            last: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            },
            get: function () {
                return {
                    config: this.config,
                    content: this.content,
                };
            },
            getSectionByName: function (name, sections) {
                var self, subsection;
                self = this;
                subsection = false;
                if (sections === undefined) {
                    sections = this.content.sections;
                }
                for (var s in sections) {
                    if(s) {
                        var section = sections[s];
                        if (section.name === name) {
                            return section;
                        }
                        if (section.sections) {
                            subsection = self.getSectionByName(name, section.sections);
                            if (subsection !== false) {
                                return subsection;
                            }
                        }
                    }
                }
                return false;
            }
        };
    }

    angular.module('common.services.data', [])
            .factory('DataService', dataService);
})();
