/*
 * Namespace: lb.base.string
 * String Adapter Module for Base Library
 *
 * Authors:
 * o Eric Bréchemier <legalbox@eric.brechemier.name>
 * o Marc Delhommeau <marc.delhommeau@legalbox.com>
 *
 * Copyright:
 * Legal-Box SAS (c) 2010-2011, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2011-06-28
 */
/*jslint white:false, plusplus:false */
/*global define */
define(["./lb.base","./closure/goog.string"],
  function(lbBase,   string) {
  // Builder of
  // Closure for lb.base.string module

  // Declare alias
  var gTrim = string.trim;

  function trim(string){
    // Function: trim(string): string
    // Remove white space from the start and end of the string.
    //
    // Parameter:
    //   string - string, a string
    //
    // Returns:
    //   a string with whitespace removed from start and end.
    //   The whitespace within is neither removed nor normalized.

    return gTrim(string);
  }

  // Assign to lb.base.string
  // for backward-compatibility in browser environment
  lbBase.string = { // public API
    trim: trim
  };
  return lbBase.string;
});
