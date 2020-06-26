import $ = require('jquery');
import jqXHR = JQuery.jqXHR;
import {Locale, METHOD_HTTP} from "../util/Constants";

export class Model {

    public static callServer(url: string, method: string, async: boolean = true, data: Object = null, locale: Locale = Locale.VN): jqXHR<any> {

        if (url.includes('?')) {
            url +=`&lang=${locale}`
        } else {
            url += `?lang=${locale}`;
        }

        return $.ajax({
            url: url,
            method: method,
            contentType: 'application/json',
            async: async,
            data: method == METHOD_HTTP.Get ? '' : JSON.stringify(data),
        });
    }
}
