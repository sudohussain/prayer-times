

let selection = document.querySelector("select")

getPrayerTime("dmammam")
selection.addEventListener("change", () => {
    let value = document.getElementById("selectCity").value
    console.log(value)
    getPrayerTime(value)
})

function getPrayerTime(city) {

    axios.get("http://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=saudi arabia&method=4")
        .then((response) => {
            let date = response.data.data.date.hijri.date
            let day = response.data.data.date.hijri.weekday.ar
            let Fajr = response.data.data.timings.Fajr
            let Sunrise = response.data.data.timings.Sunrise
            let Dhuhr = response.data.data.timings.Dhuhr
            let Asr = response.data.data.timings.Asr
            let Maghrib = response.data.data.timings.Maghrib
            let Isha = response.data.data.timings.Isha

            document.getElementById("times").innerHTML = `
                    <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">الصبح</th>
                            <th scope="col">${Fajr}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>

                  <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">الشروق</th>
                            <th scope="col">${Sunrise}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>
                  <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">الظهر</th>
                            <th scope="col">${Dhuhr}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>
                  <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">العصر</th>
                            <th scope="col">${Asr}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>
                  <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">المغرب</th>
                            <th scope="col">${Maghrib}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>
                  <li class="list-group-item">
                    <table class="table table-borderless table-sm " style="margin: 0px;  table-layout: fixed;">
                        <thead>
                          <tr >
                            <th   scope="col">العشاء</th>
                            <th scope="col">${Isha}</th>
                          </tr>
                        </thead>
                    </table>
                  </li>
        `

            document.getElementById("day-info").innerHTML = `
            <div class="card">
                <div class="card-body">
                    <table class="table table-borderless table-sm " style="margin: 0px;">
                        <thead>
                          <tr >
                            <th   scope="col">${day}</th>
                            <th scope="col">${date}</th>
                          </tr>
                        </thead>
                    </table>
                </div>
            </div>
        `
        })

}

