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
define(["jquery"], function(jQuery) {
    "use strict";
    
    return function Translate(EventManager){
		var translation;
		var systemLanguages;
		var translationUrl;
		var translationCode;
		var browserLanguage = [];
		
		function loadLanguages(url){
			translationUrl = url;
        	$.getJSON(translationUrl + "registry.json", function(registry) {
				  systemLanguages = registry;
				  EventManager.fireEvent("iweb.translations.loaded");
				}).fail(function(e, e2, e3) {
				    alert( "There was an error loading the translation registry." );
			});
        };
        
        function loadDefaultTranslation(){
    		if(systemLanguages){
	    		for(var i=0; i<systemLanguages.length; i++){
	    			if(systemLanguages[i].default){
	    				loadTranslation(systemLanguages[i].code);
	    				return;
	    			}
	    		}
	    	}
	    	
	    	var defaultLanguage = getBrowserLanguage();
    		if(defaultLanguage){
    			for(var i=0; i<defaultLanguage.length; i++){
    				translation = loadTranslation(defaultLanguage[i]);
    				if(translation){
    					break;
    				}
    			}
    		}
	    };
	    
	    function getBrowserLanguage() {
	    	if(browserLanguage.length == 0){
				//Figure out which ones we have loaded,
				var navigatorLanguage = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
				
				//remove hyphen
				browserLanguage.push(navigatorLanguage.replace(/-/i, "")); 
				browserLanguage.push(navigatorLanguage.split("-")[0]);
			}
			return browserLanguage;
		};
	    
	    function loadTranslation(code){
	     	//Don't reload if the language has already been loaded
	     	if(code != translationCode){ //TODO: configure the default that the app is built with?
	     		var url = translationUrl + //configured web enabled directory
	     					code + "/" + //language specific directory
	     					code + ".json"; //translation file
				$.getJSON(url, function(json) {
				  if(json){
				  	translationCode = code;
				  	
				  	translation = json;
				  	
				  	var localePath = "../.." + //Require loads relative to the web application
				  								//But translation directory is external
				  		translationUrl + //web enabled directory
				  		code + "/" + //the language code as the directory
				  		"locale.js"; //the file name
				  		
				  	//Load ExtJS specific locales
				  	require([localePath], function(locales){});
				  	
				  	EventManager.fireEvent("dcds.translation.loaded");
				  }
				}).fail(function(e, e2, e3) {
				    alert( "There was an error loading the translation." );
				});
			}
    	};
    	
    	function selectAnOrg(){
    		if(systemLanguages){
	    		for(var i=0; i<systemLanguages.length; i++){
	    			if(systemLanguages[i].default){
	    				var defaultLanguage = systemLanguages[i];
	    				if(defaultLanguage && defaultLanguage.code && defaultLanguage.selectAnOrg){
			    			return defaultLanguage.selectAnOrg;
			    		}
	    			}
	    		}
	    	}
	    	return "Select an organization for this session";
    	};
        
        return {
	    	
	    	init: function(url){
	    		if(url){
		    		loadLanguages(url);
		    	}
	    	},
	    	
	    	/**
	         * Translate String
	         * @param string
	         */
	        i18nJSON: function(string){
	        	return (translation && translation[string]) ? (translation[string]) : string;
	        }, // i18JSON
	        
	        getSystemLanguages: function() {
	        	if(systemLanguages){
	        		return systemLanguages;
	        	}	
	        	//return languages not loaded error
	        },
	        
	        setDefaultLanguage: function(){
	        	loadDefaultTranslation();
	        },
	        
	        setSystemLanguage: function(code){
	        	loadTranslation(code);
	        },
	        
	        selectAnOrganization: function(){
	        	return selectAnOrg();
	        }
	    }
	};
});