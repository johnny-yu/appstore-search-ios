import requests

#https://apps.mzstatic.com/content/appstore-ios-13/e2c6dc88b5c05d288b61e0020430782b/app-prod.js
#https://apps.mzstatic.com/content/appstore-ios-13/e2c6dc88b5c05d288b61e0020430782b/app-prod.js

#https://bag.itunes.apple.com/bag.xml?os=iOS&osVersion=13.6.1&deviceClass=iPhone&product=AppStore&productVersion=3.0&profile=AppStore&profileVersion=1&format=json&storefront=143465-19,29%20t:apps3
#https://amp-api-search-edge.apps.apple.com/v1/catalog/cn/search?platform=iphone&extend=editorialBadgeInfo%2CmessagesScreenshots%2CminimumOSVersion%2CrequiredCapabilities%2CscreenshotsByType%2CsupportsFunCamera%2CvideoPreviewsByType&include=apps%2Ctop-apps&include%5Beditorial-items%5D=upsell&src=hint&limit%5Bads-result%5D=4&bubble%5Bsearch%5D=apps%2Cdevelopers%2Cgroupings%2Ceditorial-items%2Capp-bundles%2Cin-apps&term=vlc&l=zh-Hans-CN



cookies = {
    'mz_at0-11059906653': 'AwQAAAF4AAHVJgAAAABfIp2huqKryxmYQOxmgN/9FYiYPgGTjT8=',
    'mz_at_ssl-11059906653': 'AwUAAAF4AAHVJgAAAABfIp2hUD/LwycMsrRHkVnGby1MNA93sRs=',
    'ndcd': 'wc1.1.w-855182.1.2.1-E9HUM3MCm4QbX95xHguw%2C%2C.XegYpcTwhYaueCaUDIGkzTtVAsbJ5TgfrPYvxwBuKxVeldR-RZ2Cbb9KLDiaM18PMDm68HBmnQf3flKBzxC40rzhfvfdzxIwoM4etll_2RzcEAnefeBdQBqAhVV9sFnTz-pl4NhatBeJT3YN1K4R2vpdkfwwNp1pXsb68ltbYec%2C',
    'pldfltcid': 'd89bb7f6768f4493a6ca518c4069623f055',
    'wosid-lite': 'JtiUha9JgV03OLyye14rew',
    'xt-b-ts-11059906653': '1596104097824',
    'itspod': '55',
    'xp_ci': '3z64YgVzAtMz4wJzCwPz1EcKv1sFn',
    'X-Dsid': '11059906653',
    'vrep': 'CN2Q45kpEgQIBRAAEgQIAhAAEgQIChAAEgQIARAAEgQIAxAAEgQIBBAAEgQIBhAAEgQIBxAAEgQICBAAEgQICRAA',
    'xt-src': 'b',
    'xp_ab': '1#Jv0scgz+-2+GY7ecau1#NyCxKBD+-2+jM0ED8C0#ZPJNBED+-2+7ih0RSn1',
}


'''
from app-prod.js

    function $(e, t) {
        const n = M(e).toString();
        return mediaToken.refreshToken().then(e = >(function e(t, n, r = {},
        i = !1) {
            const o = new Fl(t),
            a = V(o);
            for (const e of a) o.removeParam(e);
            let c = r.headers;
            return c || (c = {}),
            c.Authorization = "Bearer " + n,
            net.fetch({
                url: t,
                headers: c,
                method: r.method,
                body: r.requestBodyString,
                timeout: r.timeout
            }).then(n = >{
'''

authorization ='Bearer eyJraWQiOiJGNDdEWk4xOEYwIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJBUzI4UjdHMTdNIiwiaWF0IjoxNTk0ODg5OTEyLCJleHAiOjE1OTc0ODE5MTJ9.UH8pQolrS3vjAKo0wZ0npfyMMv-xs_dBq1loW4bLFTztWJlnBfCx6Ab3B4oz3Sdz1s6ule_VNMxiWztMS_bq7Q',

au_a='eyJraWQiOiJGNDdEWk4xOEYwIiwiYWxnIjoiRVMyNTYifQ'#{"kid":"F47DZN18F0","alg":"ES256"}
au_b='eyJpc3MiOiJBUzI4UjdHMTdNIiwiaWF0IjoxNTk0ODg5OTEyLCJleHAiOjE2OTc0ODE5MTJ9'#{"iss":"AS28R7G17M","iat":1594889912,"exp":1597481912}
au_c='UH8pQolrS3vjAKo0wZ0npfyMMv-xs_dBq1loW4bLFTztWJlnBfCx6Ab3B4oz3Sdz1s6ule_VNMxiWztMS_bq7Q'



headers = {
    'Host': 'amp-api-search-edge.apps.apple.com',
    'x-apple-tz': '28800',
    'user-agent': 'AppStore/3.0 iOS/12.1.2 model/iPhone8,1 hwp/s8000 build/16C101 (6; dt:120) AMS/1',
    'x-apple-store-front': '143441-1,29 t:apps3',
    'x-apple-iad-request-data': 'AAAAHAAAAcQKvQMJAAAAWajI10ESEmNvbS5hcHBsZS5BcHBTdG9yZRoJaVBob25lOCwxJQAAAEEoAjIBMTodVmVyc2lvbiAxMi4xLjIgKEJ1aWxkIDE2QzEwMSlCCzE0MzQ0MS0xLDI5SgV6aF9DTlIOemhfSGFucy1QaW55aW5SDnpoX0hhbnMtUGlueWluUgJhclIFY2FfRVNSCmphX0pQLUthbmFSBWVtb2ppUgVlbl9VU1gBYABoAaIBTQoVaW1wcmVzc2lvbkNvdW50QnlMaW5lEjR7IjExNDIxMjg3ODUiOlswXSwiODM1NTk5MzIwIjpbMF0sIjYwNDA0NDIyMCI6WzAsMF19qAEAsgEkQ0ZCOURBMzAtQkEyMS00N0M5LUIyQzAtNzFBMjNDRjUxOTAxugEkNzRFRTAwRTgtMzYwOC00M0FELThENTUtOTkwNTQ0OURDMTlFygEpRFBJRC01MDZDRDAyRi00MTA4LTQxMzMtOTZCQS0yN0M4NzZCNTRFQ0PwAQH6ASREOTE4NzJGNy03NjFCLTQzRTktODA0NS1FREE4RjQ2NDQ3RTCSAgIwMJoCAzQ2MKgCArICAmVuuAICEAAYAA==',
    'x-dsid': '11059906653',
    'x-apple-iad-env-name': 'AAAAAAAAAEQKAlNTEjlodHRwczovL3RyLmlhZHNkay5hcHBsZS5jb20vYWRzZXJ2ZXIvMi42L3Nwb25zb3JlZC9zZWFyY2gaAzIuNg==',
    'x-apple-client-application': 'com.apple.AppStore',
    'x-apple-i-timezone': 'GMT+8',
    'x-apple-i-client-time': '2020-09-22T10:31:01Z',
    'x-apple-app-store-client-request-id': '112B9BC1-3F3C-417E-B241-4C9FC4B5FFD3',
    'authorization': 'Bearer '+au_a+au_b+au_c,
    'accept-language': 'zh-Hans-CN',
    'x-apple-i-md-rinfo': '17106176',
    'x-apple-adsid': '001225-08-ef1736de-14d3-488d-ad76-a0c13c4b4ac8',
    'accept': '*/*',
    'x-apple-i-md-m': 'wpgb7FOqeEG2INWFLKKHRfSnUCAw15zJcIk8P8OLKR+Tp/1PV+VKMUDkOcTmcAo7dT835g/usrX+EztS',
    'x-apple-i-locale': 'zh_CN',
    'x-apple-i-md': 'AAAABQAAABCk+1nHQNUl8ewDDsuxJNFQAAAAAw==',
}





params = (
('platform', 'iphone'),
('extend', 'editorialBadgeInfo,messagesScreenshots,minimumOSVersion,requiredCapabilities,screenshotsByType,supportsFunCamera,videoPreviewsByType'),
('include', 'apps,top-apps'),
('include[editorial-items]', 'upsell'),
('src', 'hint'),
('limit[ads-result]', '4'),
('bubble[search]', 'apps,developers,groupings,editorial-items,app-bundles,in-apps'),
('term', 'vlc'),
('l', 'zh-Hans-CN'),
)

proxies={
'http':'127.0.0.1:8888',
'https':'127.0.0.1:8888',
}

#https://amp-api-search-edge.apps.apple.com/v1/catalog/cn/search?platform=iphone&extend=editorialBadgeInfo%2CmessagesScreenshots%2CminimumOSVersion%2CrequiredCapabilities%2CscreenshotsByType%2CsupportsFunCamera%2CvideoPreviewsByType&include=apps%2Ctop-apps&include%5Beditorial-items%5D=upsell&src=hint&limit%5Bads-result%5D=4&bubble%5Bsearch%5D=apps%2Cdevelopers%2Cgroupings%2Ceditorial-items%2Capp-bundles%2Cin-apps&term=vlc&l=zh-Hans-CN

response = requests.get('https://amp-api-search-edge.apps.apple.com/v1/catalog/us/search', headers=headers, params=params, cookies=cookies, proxies=proxies,  verify=False)

print (response)
