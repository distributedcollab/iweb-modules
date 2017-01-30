/*
 * Copyright (c) 2008-2016, Massachusetts Institute of Technology (MIT)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define(["iweb/CoreModule", "./LineController"], function(Core) { //Add shape options

	return Ext.define(null, {
	       extend: 'Ext.SplitButton',
	       
	       controller: "drawmenu.linebutton",
	       
			cls: 'line-btn',
			scale: 'medium',
			arrowAlign: 'bottom',
			menuAlign: 't-b?',
			
			
			listeners: {
				toggle: "onToggle"
			},
			
			menu: {
				cls: 'line-menu',
				minWidth: 0,
				plain: true,

				referenceHolder: true,
				
				layout: {
			        type: 'vbox'
			    },
				
				defaults: {
					xtype: 'button',
					scale: 'medium',
					margin: 0,
					toggleGroup: 'lineMenuGroup',
					allowDepress: false,
					iconAlign: 'top',
					textAlign: 'left',
					cls: 'dcds-icon',
					icon: "images/drawmenu/dcds-sprites.png"
				},
				items: [{
					tooltip: Core.Translate.i18nJSON("Draw Thin Line"),
					text: '<div class="icon-style"><b>' + Core.Translate.i18nJSON("thin").toUpperCase() + '</b></div>',
					iconCls: "sprite-pencil_thin",
					reference: "thin",
					handler: "onThinClick"
				},{
					tooltip: Core.Translate.i18nJSON("Draw Medium Line"),
					iconCls: "sprite-pencil_med",
					reference: "medium",
					handler: "onMediumClick",
					text: '<div class="icon-style"><b>' + Core.Translate.i18nJSON("medium").toUpperCase() + '</b></div>'
				},{
					tooltip: Core.Translate.i18nJSON("Draw Thick Line"),
					iconCls: "sprite-pencil_thick",
					reference: "thick",
					handler: "onThickClick",
					text: '<div class="icon-style"><b>' + Core.Translate.i18nJSON("thick").toUpperCase() + '</b></div>'
				},{
					tooltip: Core.Translate.i18nJSON("Draw Dashed Line"),
					icon: "images/drawmenu/pencil-dash.png",
					reference: "dashed",
					handler: "onDashedClick",
					text: '<div class="icon-style"><b>' + Core.Translate.i18nJSON("dashed").toUpperCase() + '</b></div>'
				}]
			}
	       
	    });
});
