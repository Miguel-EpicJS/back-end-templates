import { Template } from 'meteor/templating'

import './body.html';

Template.body.helpers({
    tasks:[
        {text: "This is the first task"},
        {text: "This is the second task"},
        {text: "This is the third task"},
    ],
})