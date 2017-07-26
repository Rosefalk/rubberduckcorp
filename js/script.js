$(document).ready(function(){
    function bindEvents() {

        (function() {
            var $flag = $('.flag');

            if($flag.length) {
                $flag.on('click', function() {
                    localeChange($(this).data('localecode'));
                });
            }
        })();

        (function() {
            var $form = $('form');

            if($form.length) {
                var $submit = $form.find('input[type=submit]'),
                    $inputText = $form.find('input[type=text]'),
                    $inputEmail = $form.find('input[type=email]'),
                    $inputTelephone = $form.find('input[type=tel]'),
                    $formSubmitted = $form.siblings('.form-submitted'),
                    formStatus;

                $submit.on('click', function(e) {
                    e.preventDefault();

                    function toggleError($el, status) {
                        formStatus = true;
                        if(!status) {
                            formStatus = false;
                            $el.siblings('.error').css('display', 'block')
                        } else {
                            $el.siblings('.error').css('display', 'none')
                        }
                    }
                    //text
                    $inputText.each(function(i,v) {
                        var $this = $(v);
                        toggleError( $this, !($this.val() === '') );
                    });

                    //email
                    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        emailValidated = validateEmail.test($inputEmail.val());

                    toggleError($inputEmail, emailValidated)

                    //phone (generic)
                    var validatePhone = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
                        phoneValidated = validatePhone.test($inputTelephone.val());

                    toggleError($inputTelephone, phoneValidated)

                    if(formStatus) {
                        $form.slideUp(400)
                        $formSubmitted.delay(500).fadeIn();

                        //due to cors issues this part has been commented out, but only needs a URL :)
                        /*
                        $.ajax({
                            url:'/formdata',
                            type:'post',
                            data:$form.serialize(),
                            success:function(){
                                console.log('success')
                            }
                        });*/
                    }
                });
            }
        })();
    }

    function localeChange(localeCode) {
        var locale;

        switch(localeCode) {
            case 'da': locale = daDk;
                break;
            case 'en': locale = enGb;
                break;
            default: locale = enGb;
        }
        var data = $.extend({}, config, locale);

        var template = Handlebars.compile( $('#template').html() );
        $('body').html( template(data) );

        bindEvents();
    }

    function init() {
        localeChange('da');
    }

    init();
});
