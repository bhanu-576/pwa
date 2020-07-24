const staticDevCars = "dev-car-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "js/app.js",
    "/photo/a.jpg",
    "/photo/b.jpg",
    "/photo/c.jpg",
    "/photo/d.jpg",
    "/photo/e.jpg",
    "/photo/f.jpg",
    "/photo/g.jpg",
    "/photo/h.jpg",
    "/photo/i.jpg",
]
self.addEventListener("install",installEvent 
=>{
    installEvent.waitUntil(
        caches.open(staticDevCar).then(cache
            => {
                cache.addAll(assets)
            })
    )

})
// Fetch the assets
self.addEventListener("fetch",fetchEvent =>
{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
})