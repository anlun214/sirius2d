﻿/**
 * StringUtil.js
 *
 * HTML5游戏开发者社区 QQ群:326492427 127759656 Email:siriushtml5@gmail.com
 * Copyright (c) 2011 Sirius2D www.Sirius2D.com www.html5gamedev.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


(function()
{
    ss2d.StringUtil = Class
    (
        {
            STATIC:
            {
                padding : function(str, cols, replaceStr, lpad)
                {
                    replaceStr = replaceStr === undefined ? " " : replaceStr;
                    str = String(str);
                    if (str.length > cols)  return str.substr(0, cols);
                    while (str.length < cols)
                    {
                        str = lpad ? replaceStr + str : str + replaceStr;
                    }
                    return str;
                },

                toBoolean : function(value)
                {
                    return value == "true" || value == "1" || value == "yes";
                },

                trim : function(value)
                {
                    var ltrim, rtrim;
                    ltrim = /^(\s|\n|\r|\t|\v|\f)*/m;
                    rtrim = /(\s|\n|\r|\t|\v\|f)*$/;
                    return value.replace(ltrim, "").replace(rtrim, "");
                },

                toNative : function(vaule)
                {
                    var str = value.toLowerCase();
                    var reslut;
                    if (str == "true" || str == "false")
                    {
                        reslut = ss2d.StringUtil.toBoolean(str);
                    }
                    else if (str == "null" || str == "nan" || str == "undefined" || str == "infinity")
                    {
                        reslut = null; // Value is unnassigned.
                    }
                    else if (!isNaN(Number(str)))
                    {
                        reslut = ss2d.StringUtil.toNumber(str);
                    }
                    else
                    {
                        reslut = str;
                    }
                    return reslut;
                },

                toNumber : function(value)
                {
                    return (ss2d.StringUtil.trim(value) == "" || value == null) ? 0 : Number(value);
                }
            }
        }
    )
})();