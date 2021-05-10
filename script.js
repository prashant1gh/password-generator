        window.onload = function() {

        };


        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const symbols = '!@#$%^&*';
        // slider

        var slider = document.getElementById('slider');
        var slider_result = document.getElementById('slider_meter');
        sliderValue = slider.value;
        slider_result.value = sliderValue
        slider.oninput = function() {
            sliderValue = slider.value;
            slider_result.value = sliderValue;
            generate_password(sliderValue, char_domain);

        }

        // slider-end

        // generated password textbox
        var result = document.getElementById('password_result');
        result.value = generate_password(8);

        // generated password textbox end

        // character domain selection
        var char_domain = [];
        var lowercase_check = document.getElementById('lowercase_check');
        lowercase_check.checked = true;
        char_domain.push(lowercase);
        var uppercase_check = document.getElementById('uppercase_check');
        var numbers_check = document.getElementById('numbers_check');
        var symbols_check = document.getElementById('symbols_check');


        function removeItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        }


        lowercase_check.onchange = function() {
            if (lowercase_check.checked) {
                char_domain.push(lowercase);
            } else {
                if (char_domain.length === 1) {
                    alert('You should check at least one domain');
                    lowercase_check.checked = true;
                } else {
                    removeItemOnce(char_domain, lowercase);
                }

            }
            generate_password(sliderValue, char_domain);

        }

        uppercase_check.onchange = function() {
            if (uppercase_check.checked) {
                char_domain.push(uppercase);

            } else {
                if (char_domain.length === 1) {
                    alert('You should check at least one domain');
                    uppercase_check.checked = true;
                } else {
                    removeItemOnce(char_domain, uppercase);
                }

            }
            generate_password(sliderValue, char_domain);

        }

        numbers_check.onchange = function() {
            if (numbers_check.checked) {
                char_domain.push(digits);

            } else {
                if (char_domain.length === 1) {
                    alert('You should check at least one domain');
                    numbers_check.checked = true;
                } else {
                    removeItemOnce(char_domain, digits);
                }

            }
            console.log(char_domain);
            generate_password(sliderValue, char_domain);

        }

        symbols_check.onchange = function() {
            if (symbols_check.checked) {
                char_domain.push(symbols);
            } else {
                if (char_domain.length === 1) {
                    alert('You should check at least one domain');
                    symbols_check.checked = true;
                } else {
                    removeItemOnce(char_domain, symbols);
                }
            }
            generate_password(sliderValue, char_domain);

        }

        // character domain selection end

        var generate_password_button = document.getElementById('generate_password');
        var resultSection = document.getElementById('result_container');
        resultSection.style.display = 'none';


        generate_password_button.addEventListener('click', function(event) {
            event.preventDefault();
            generate_password(sliderValue, char_domain);
            resultSection.style.display = 'block';
        });

        // copy the password
        var copyBtn = document.querySelector('.copybtn');

        copyBtn.addEventListener('click', function(event) {
            event.preventDefault();
            var copyPassword = document.querySelector('#password_result');
            copyPassword.focus();
            copyPassword.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
        });


        function generate_password(passwordLength = 8, char_domain = ['lowercase']) {

            // var length = slider_result.value;
            var length = passwordLength;

            var password = '';

            for (i = 0; i < length; i++) {
                var a = char_domain;
                var c = a[Math.floor(Math.random() * a.length)];
                var cc = Math.floor(Math.random() * c.length);

                char = c.charAt(cc);
                password += char;
            }
            result.value = password;

            return password
        }

        var toggle_night_mode = document.getElementById('night_mode');
        var night_mode = true;
        toggle_night_mode.addEventListener('click', function(event) {
            event.preventDefault();
            if (night_mode) {
                document.getElementsByTagName('body')[0].style.backgroundColor = "#fff";
                document.getElementsByTagName('body')[0].style.color = "#000";
                document.getElementById('password_result').style.color = "#000"
                document.getElementById('slider_meter').style.color = "#000"
                document.getElementById('night_mode').style.background = "url(./images/moon.png) no-repeat";

                night_mode = false;
            } else {
                document.getElementsByTagName('body')[0].style.backgroundColor = "#212121";
                document.getElementsByTagName('body')[0].style.color = "#dadada";
                document.getElementById('password_result').style.color = "#dadada"
                document.getElementById('slider_meter').style.color = "#dadada"
                document.getElementById('night_mode').style.background = "url(./images/sun.png) no-repeat";

                night_mode = true;
            }
        });