$(document).ready(function(){
    var name_brand = ['apple','xiaomi', 'samsung', 'oppo', 'vivo', 'asus', 'lg', 'htc', 'microsoft','realme', 'infinix','google', 'huawei','meizu','nokia','motorola','honor', 'acer','sony'];

    name_brand.sort()

    $.each(name_brand, function(key, value){
        $("#brand").append(`
            <option value="${value}">${value}</option>
        `)
    })

    $(".search--hero").click(function(){
        var search_hero = $(this).parent().parent().find('.hero').val();
        var id_hero = $(this).parent().parent().attr('id');
        if (search_hero.length == 0) {
            alert ('tipe HP harap diisi')
        } else {
            $.ajax({
                url: "https://mobile-devices.p.rapidapi.com/getdevice",
                data: { brand: id_hero, device: search_hero },
                method: 'GET',
                beforeSend: function(){
                    $("#loading").show();
                    $(".show").hide();
                },
                complete: function(){
                    $("#loading").hide();
                    $('.show').show();
                },
                headers: {
                    "x-rapidapi-host": "mobile-devices.p.rapidapi.com",
                    "x-rapidapi-key": "b66eb3153bmsh1d00af693516ac2p106275jsn0b6d5b9e5b20"
                }, success: (response => {
                    console.log(response);
                    var res = $(".result");
                    var none = $(".none");
                    none.hide();
                    if (response.status == 'error') {
                        res.append(`
                            <div class="container">
                                <h1 class="title text-center">Uppps! <span class="red">${search_hero}</span> ${response.message}</h1>
                            </div>
                        `)
                    } else {
                        for(i=0; i<response.length; i++) {
                            if(response.length == 'undefined') {
                                $('<td>').html('-')
                            }
                            res.append(`
                            <div class="row">
                                <div class="col-md-8 offset-md-2">
                                    <div class="pb-2 my-3 border-show">
                                        <div class="bg-headline radius-20">
                                            <div class="container">
                                                <h1 class="title py-4 px-2">${response[i].DeviceName}</h1>
                                            </div>
                                        </div>

                                        <div class="pb-2 py-4 px-4 bg-gradient">
                                            <div class="container">
                                                <h4 class="category">Network</h4>
                                                <table>
                                                    <td class="gray-col">GSM</td>
                                                    <td>:</td>
                                                    <td>${response[i].technology}</td>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="bg-white pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Launch</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Announced</td>
                                                        <td>:</td>
                                                        <td>${response[i].announced}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pb-2 py-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Body</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Dimensi</td>
                                                        <td>:</td>
                                                        <td>${response[i].dimensions}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">weight</td>
                                                        <td>:</td>
                                                        <td>${response[i].weight}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">SIM</td>
                                                        <td>:</td>
                                                        <td>${response[i].sim}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Display</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Type</td>
                                                        <td>:</td>
                                                        <td>${response[i].type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Size</td>
                                                        <td>:</td>
                                                        <td>${response[i].size}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Resolution</td>
                                                        <td>:</td>
                                                        <td>${response[i].resolution}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Protection</td>
                                                        <td>:</td>
                                                        <td>${response[i].protection}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Platform</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">OS</td>
                                                        <td>:</td>
                                                        <td>${response[i].os}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">CPU</td>
                                                        <td>:</td>
                                                        <td>${response[i].cpu}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">GPU</td>
                                                        <td>:</td>
                                                        <td>${response[i].gpu}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Chipset</td>
                                                        <td>:</td>
                                                        <td>${response[i].chipset}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Memory</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Card Slot</td>
                                                        <td>:</td>
                                                        <td>${response[i].card_slot}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Main Camera</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Primary</td>
                                                        <td>:</td>
                                                        <td>${response[i].primary_}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Single</td>
                                                        <td>:</td>
                                                        <td>${response[i].single}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Features</td>
                                                        <td>:</td>
                                                        <td>${response[i].features}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Video</td>
                                                        <td>:</td>
                                                        <td>${response[i].video}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Selfie</td>
                                                        <td>:</td>
                                                        <td>${response[i].triple}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Sound</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Loudspeaker</td>
                                                        <td>:</td>
                                                        <td>${response[i].loudspeaker_}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">3.5 mm Jack</td>
                                                        <td>:</td>
                                                        <td>${response[i]._3_5mm_jack_}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Comms</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">WLAN</td>
                                                        <td>:</td>
                                                        <td>${response[i].wlan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Bluetooth</td>
                                                        <td>:</td>
                                                        <td>${response[i].bluetooth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">gps</td>
                                                        <td>:</td>
                                                        <td>${response[i].gps}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">NFC</td>
                                                        <td>:</td>
                                                        <td>${response[i].nfc}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Radio</td>
                                                        <td>:</td>
                                                        <td>${response[i].radio}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">USB</td>
                                                        <td>:</td>
                                                        <td>${response[i].usb}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Features</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Sensor</td>
                                                        <td>:</td>
                                                        <td>${response[i].sensors}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4 bg-white">
                                            <div class="container">
                                                <h4 class="category">Battery</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Battery</td>
                                                        <td>:</td>
                                                        <td>${response[i].battery_c}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Charging</td>
                                                        <td>:</td>
                                                        <td>${response[i].charging}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4 bg-gradient">
                                            <div class="container">
                                                <h4 class="category">Models</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Color</td>
                                                        <td>:</td>
                                                        <td>${response[i].colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Model</td>
                                                        <td>:</td>
                                                        <td>${response[i].models}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h3 class=""category price">Price: ${response[i].price}</h3>
                                                <a href="https://dediwibisono17.github.io/currency/" target="_blank">Convert Price</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            
                            
                        `)
                        }
                    }
                })
            })
        }
        
    })

    $("#search").click(function(){
        var search_name = $("#dedi").val();
        var brand = $("#brand").find(":selected").text()
        if (search_name.length == 0) {
            alert('tipe HP harap diisi')
        } else {
            $.ajax({
                url: "https://mobile-devices.p.rapidapi.com/getdevice",
                data: { brand: brand, device: search_name },
                method: 'GET',
                beforeSend: function(){
                    $("#loading").show();
                    $(".show").hide();
                },
                complete: function(){
                    $("#loading").hide();
                    $('.show').show();
                },
                headers: {
                    "x-rapidapi-host": "mobile-devices.p.rapidapi.com",
                    "x-rapidapi-key": "b66eb3153bmsh1d00af693516ac2p106275jsn0b6d5b9e5b20"
                }, success: (response => {
                    var res = $(".result");
                    res.html('');
                    $(".none").hide();
                    if (response.status == 'error') {
                        res.append(`
                            <div class="container">
                                <h1 class="title text-center">Uppps! <span class="red">${search_name}</span> ${response.message}</h1>
                            </div>
                        `)
                    } else {
                        for(i=0; i<response.length; i++) {
                            if(response.length == 'undefined') {
                                $('<td>').html('-')
                            }
                            res.append(`
                            <div class="row">
                                <div class="col-md-8 offset-md-2">
                                    <div class="pb-2 my-3 border-show">
                                        <div class="bg-headline radius-20">
                                            <div class="container">
                                                <h1 class="title py-4 px-2">${response[i].DeviceName}</h1>
                                            </div>
                                        </div>

                                        <div class="pb-2 py-4 px-4 bg-gradient">
                                            <div class="container">
                                                <h4 class="category">Network</h4>
                                                <table>
                                                    <td class="gray-col">GSM</td>
                                                    <td>:</td>
                                                    <td>${response[i].technology}</td>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="bg-white pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Launch</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Announced</td>
                                                        <td>:</td>
                                                        <td>${response[i].announced}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pb-2 py-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Body</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Dimensi</td>
                                                        <td>:</td>
                                                        <td>${response[i].dimensions}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">weight</td>
                                                        <td>:</td>
                                                        <td>${response[i].weight}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">SIM</td>
                                                        <td>:</td>
                                                        <td>${response[i].sim}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Display</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Type</td>
                                                        <td>:</td>
                                                        <td>${response[i].type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Size</td>
                                                        <td>:</td>
                                                        <td>${response[i].size}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Resolution</td>
                                                        <td>:</td>
                                                        <td>${response[i].resolution}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Protection</td>
                                                        <td>:</td>
                                                        <td>${response[i].protection}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Platform</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">OS</td>
                                                        <td>:</td>
                                                        <td>${response[i].os}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">CPU</td>
                                                        <td>:</td>
                                                        <td>${response[i].cpu}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">GPU</td>
                                                        <td>:</td>
                                                        <td>${response[i].gpu}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Chipset</td>
                                                        <td>:</td>
                                                        <td>${response[i].chipset}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Memory</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Card Slot</td>
                                                        <td>:</td>
                                                        <td>${response[i].card_slot}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Main Camera</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Primary</td>
                                                        <td>:</td>
                                                        <td>${response[i].primary_}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Single</td>
                                                        <td>:</td>
                                                        <td>${response[i].single}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Features</td>
                                                        <td>:</td>
                                                        <td>${response[i].features}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Video</td>
                                                        <td>:</td>
                                                        <td>${response[i].video}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Selfie</td>
                                                        <td>:</td>
                                                        <td>${response[i].triple}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Sound</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Loudspeaker</td>
                                                        <td>:</td>
                                                        <td>${response[i].loudspeaker_}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">3.5 mm Jack</td>
                                                        <td>:</td>
                                                        <td>${response[i]._3_5mm_jack_}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Comms</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">WLAN</td>
                                                        <td>:</td>
                                                        <td>${response[i].wlan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Bluetooth</td>
                                                        <td>:</td>
                                                        <td>${response[i].bluetooth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">gps</td>
                                                        <td>:</td>
                                                        <td>${response[i].gps}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">NFC</td>
                                                        <td>:</td>
                                                        <td>${response[i].nfc}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Radio</td>
                                                        <td>:</td>
                                                        <td>${response[i].radio}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">USB</td>
                                                        <td>:</td>
                                                        <td>${response[i].usb}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h4 class="category">Features</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Sensor</td>
                                                        <td>:</td>
                                                        <td>${response[i].sensors}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4 bg-white">
                                            <div class="container">
                                                <h4 class="category">Battery</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Battery</td>
                                                        <td>:</td>
                                                        <td>${response[i].battery_c}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Charging</td>
                                                        <td>:</td>
                                                        <td>${response[i].charging}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4 bg-gradient">
                                            <div class="container">
                                                <h4 class="category">Models</h4>
                                                <table>
                                                    <tr>
                                                        <td class="gray-col">Color</td>
                                                        <td>:</td>
                                                        <td>${response[i].colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="gray-col">Model</td>
                                                        <td>:</td>
                                                        <td>${response[i].models}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="pt-4 px-4">
                                            <div class="container">
                                                <h3 class=""category price">Price: ${response[i].price}</h3>
                                                <a href="https://dediwibisono17.github.io/currency/" target="_blank">Convert Price</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            
                            
                        `)
                        }
                })
            })
        }
    })

    $(".logo").click(function(){
        location.reload();
    })

    $("#scroll-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-top').fadeIn();
            } else {
                $('#scroll-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#scroll-top button').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    });


})