module.exports = {
    year: () => {
        return new Date().getFullYear();
    },
    month: () => {
        const d = new Date();
        let m = d.getMonth() + 1;
        let rvalue;
        if(m < 10) {
            rvalue = '0' + m.toString();
        }
        else {
            rvalue = m.toString();
        }
        return rvalue;
    },
    day: () => {
        const d = new Date();
        let dd = d.getDate();
        let rvalue;
        if(dd < 10) {
            rvalue = '0' + dd.toString();
        }
        else {
            rvalue = dd.toString();
        }
        return rvalue;
    },
    hours: () => {
        const d = new Date();
        let h = d.getHours();
        let rvalue;
        if(h < 10) {
            rvalue = '0' + h.toString();
        }
        else {
            rvalue = h.toString();
        }
        return rvalue;
    },
    minutes: () => {
        const d = new Date();
        let min = d.getMinutes();
        let rvalue;
        if(min < 10) {
            rvalue = '0' + min.toString();
        }
        else {
            rvalue = min.toString();
        }
        return rvalue;
    },
    seconds: () => {
        const d = new Date();
        let s = d.getSeconds();
        let rvalue;
        if(s < 10) {
            rvalue = '0' + s.toString();
        }
        else {
            rvalue = s.toString();
        }
        return rvalue;
    }
}