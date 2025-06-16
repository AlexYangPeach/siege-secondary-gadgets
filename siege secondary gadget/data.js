// Secondary gadgets data
const secondaryGadgets = [
    { name: "Breach Charge", image: "images/gadgets/R6S_Breach_charge.avif" },
    { name: "Claymore", image: "images/gadgets/Claymore.avif" },
    { name: "Frag Grenade", image: "images/gadgets/Frag_Grenade.avif" },
    { name: "Smoke Grenade", image: "images/gadgets/Smoke_Grenade.avif" },
    { name: "Stun Grenade", image: "images/gadgets/Stun_Grenade.avif" },
    { name: "Hard Breach Charge", image: "images/gadgets/SecondaryBreacher.avif" },
    { name: "Impact EMP Grenade", image: "images/gadgets/R6S-EMP-Impact-grenade.png" },
    { name: "Impact Grenade", image: "images/gadgets/impact-grenade.avif" },
    { name: "Deployable Shield", image: "images/gadgets/Deployable_Shield.avif" },
    { name: "Barbed Wire", image: "images/gadgets/barbed-wire.webp" },
    { name: "Bulletproof Camera", image: "images/gadgets/Bulletproof_camera.avif" },
    { name: "Proximity Alarm", image: "images/gadgets/Proximity_alarm.avif" },
    { name: "Nitro Cell", image: "images/gadgets/Nitro_Cell.avif" },
    { name: "Observation Blocker", image: "images/gadgets/r6s-observationblocker.png" }
];

// Attackers data
const attackers = [
    {
        name: "Sledge",
        image: "images/operators/sledge.png",
        secondaryGadgets: ["Frag Grenade", "Stun Grenade","Impact EMP Grenade"]
    },
    {
        name: "Thatcher",
        image: "images/operators/thatcher.png",
        secondaryGadgets: ["Breach Charge", "Claymore"]
    },
    {
        name: "Ash",
        image: "images/operators/ash.png",
        secondaryGadgets: ["Breach Charge", "Claymore"]
    },
    {
        name: "Thermite",
        image: "images/operators/thermite.png",
        secondaryGadgets: ["Stun Grenade", "Smoke Grenade"]
    },
    {
        name: "Twitch",
        image: "images/operators/twitch.png",
        secondaryGadgets: ["Smoke Grenade", "Claymore"]
    },
    {
        name: "Montagne",
        image: "images/operators/montagne.png",
        secondaryGadgets: ["Hard Breach Charge", "Smoke Grenade","Impact EMP Grenade"]
    },
    {
        name: "Glaz",
        image: "images/operators/glaz.png",
        secondaryGadgets: ["Frag Grenade", "Smoke Grenade","Claymore"]
    },
    {
        name: "Fuze",
        image: "images/operators/fuze.png",
        secondaryGadgets: ["Breach Charge", "Hard Breach Charge","Smoke Grenade"]
    },
    {
        name: "IQ",
        image: "images/operators/iq.png",
        secondaryGadgets: ["Breach Charge", "Claymore","Frag Grenade"]
    },
    {
        name: "Blitz",
        image: "images/operators/blitz.png",
        secondaryGadgets: ["Breach Charge", "Smoke Grenade"]
    },
    {
        name: "Buck",
        image: "images/operators/buck.png",
        secondaryGadgets: ["Stun Grenade", "Claymore"]
    },
    {
        name: "Blackbeard",
        image: "images/operators/blackbeard.png",
        secondaryGadgets: ["Frag Grenade", "Claymore"]
    },
    {
        name: "Capitão",
        image: "images/operators/capitao.png",
        secondaryGadgets: ["Hard Breach Charge", "Claymore","Impact EMP Grenade"]
    },
    {
        name: "Hibana",
        image: "images/operators/hibana.png",
        secondaryGadgets: ["Breach Charge", "Stun Grenade"]
    },
    {
        name: "Jackal",
        image: "images/operators/jackal.png",
        secondaryGadgets: ["Claymore", "Smoke Grenade"]
    },
    {
        name: "Ying",
        image: "images/operators/ying.png",
        secondaryGadgets: ["Smoke Grenade", "Hard Breach Charge"]
    },
    {
        name: "Zofia",
        image: "images/operators/zofia.png",
        secondaryGadgets: ["Hard Breach Charge", "Claymore"]
    },
    {
        name: "Dokkaebi",
        image: "images/operators/dokkaebi.png",
        secondaryGadgets: ["Stun Grenade", "Smoke Grenade","Impact EMP Grenade"]
    },
    {
        name: "Lion",
        image: "images/operators/lion.png",
        secondaryGadgets: ["Frag Grenade", "Claymore","Stun Grenade"]
    },
    {
        name: "Finka",
        image: "images/operators/finka.png",
        secondaryGadgets: ["Frag Grenade", "Smoke Grenade","Stun Grenade"]
    },
    {
        name: "Maverick",
        image: "images/operators/maverick.png",
        secondaryGadgets: ["Stun Grenade", "Claymore","Smoke Grenade"]
    },
    {
        name: "Nomad",
        image: "images/operators/nomad.png",
        secondaryGadgets: ["Breach Charge", "Stun Grenade"]
    },
    {
        name: "Gridlock",
        image: "images/operators/gridlock.png",
        secondaryGadgets: ["Frag Grenade", "Smoke Grenade","Impact EMP Grenade"]
    },
    {
        name: "Nokk",
        image: "images/operators/nokk.png",
        secondaryGadgets: ["Frag Grenade", "Hard Breach Charge","Impact EMP Grenade"]
    },
    {
        name: "Amaru",
        image: "images/operators/amaru.png",
        secondaryGadgets: ["Hard Breach Charge", "Stun Grenade"]
    },
    {
        name: "Kali",
        image: "images/operators/kali.png",
        secondaryGadgets: ["Breach Charge", "Claymore","Smoke Grenade"]
    },
    {
        name: "Iana",
        image: "images/operators/iana.png",
        secondaryGadgets: ["Impact EMP Grenade", "Smoke Grenade"]
    },
    {
        name: "Ace",
        image: "images/operators/ace.png",
        secondaryGadgets: ["Breach Charge", "Claymore"]
    },
    {
        name: "Zero",
        image: "images/operators/zero.png",
        secondaryGadgets: ["Claymore", "Hard Breach Charge"]
    },
    {
        name: "Flores",
        image: "images/operators/flores.png",
        secondaryGadgets: ["Claymore", "Stun Grenade"]
    },
    {
        name: "Osa",
        image: "images/operators/osa.png",
        secondaryGadgets: ["Frag Grenade", "Claymore","Impact EMP Grenade"]
    },
    {
        name: "Sens",
        image: "images/operators/sens.png",
        secondaryGadgets: ["Hard Breach Charge", "Claymore","Frag Grenade"]
    },
    {
        name: "Grim",
        image: "images/operators/grim.png",
        secondaryGadgets: ["Claymore", "Hard Breach Charge","Impact EMP Grenade"]
    },
    {
        name: "Brava",
        image: "images/operators/brava.png",
        secondaryGadgets: ["Smoke Grenade", "Claymore"]
    },
    {
        name: "Ram",
        image: "images/operators/ram.png",
        secondaryGadgets: ["Smoke Grenade", "Stun Grenade"]
    },
    {
        name: "Deimos",
        image: "images/operators/deimos.png",
        secondaryGadgets: ["Frag Grenade", "Hard Breach Charge"]
    },
    {
        name: "Rauora",
        image: "images/operators/rauora.png",
        secondaryGadgets: ["Breach Charge", "Smoke Grenade"]
    }
];

// Defenders data
const defenders = [
    {
        name: "Smoke",
        image: "images/operators/smoke.png",
        secondaryGadgets: ["Proximity Alarm", "Barbed Wire"]
    },
    {
        name: "Mute",
        image: "images/operators/mute.png",
        secondaryGadgets: ["Bulletproof Camera", "Nitro Cell"]
    },
    {
        name: "Castle",
        image: "images/operators/castle.png",
        secondaryGadgets: ["Bulletproof Camera", "Proximity Alarm"]
    },
    {
        name: "Pulse",
        image: "images/operators/pulse.png",
        secondaryGadgets: ["Deployable Shield", "Nitro Cell","Observation Blocker"]
    },
    {
        name: "Doc",
        image: "images/operators/doc.png",
        secondaryGadgets: ["Bulletproof Camera", "Barbed Wire"]
    },
    {
        name: "Rook",
        image: "images/operators/rook.png",
        secondaryGadgets: ["Impact Grenade", "Proximity Alarm","Observation Blocker"]
    },
    {
        name: "Kapkan",
        image: "images/operators/kapkan.png",
        secondaryGadgets: ["Barbed Wire", "Bulletproof Camera"]
    },
    {
        name: "Tachanka",
        image: "images/operators/tachanka.png",
        secondaryGadgets: ["Deployable Shield", "Proximity Alarm","Barbed Wire"]
    },
    {
        name: "Jäger",
        image: "images/operators/jager.png",
        secondaryGadgets: ["Bulletproof Camera", "Observation Blocker"]
    },
    {
        name: "Bandit",
        image: "images/operators/bandit.png",
        secondaryGadgets: ["Barbed Wire", "Nitro Cell"]
    },
    {
        name: "Frost",
        image: "images/operators/frost.png",
        secondaryGadgets: ["Deployable Shield", "Bulletproof Camera"]
    },
    {
        name: "Valkyrie",
        image: "images/operators/valkyrie.png",
        secondaryGadgets: ["Impact Grenade", "Nitro Cell"]
    },
    {
        name: "Caveira",
        image: "images/operators/caveira.png",
        secondaryGadgets: ["Impact Grenade", "Proximity Alarm","Observation Blocker"]
    },
    {
        name: "Echo",
        image: "images/operators/echo.png",
        secondaryGadgets: ["Deployable Shield", "Impact Grenade"]
    },
    {
        name: "Mira",
        image: "images/operators/mira.png",
        secondaryGadgets: ["Nitro Cell", "Proximity Alarm"]
    },
    {
        name: "Lesion",
        image: "images/operators/lesion.png",
        secondaryGadgets: ["Observation Blocker", "Bulletproof Camera"]
    },
    {
        name: "Ela",
        image: "images/operators/ela.png",
        secondaryGadgets: ["Deployable Shield", "Barbed Wire","Impact Grenade"]
    },
    {
        name: "Vigil",
        image: "images/operators/vigil.png",
        secondaryGadgets: ["Impact Grenade", "Bulletproof Camera"]
    },
    {
        name: "Maestro",
        image: "images/operators/maestro.png",
        secondaryGadgets: ["Barbed Wire", "Impact Grenade","Observation Blocker"]
    },
    {
        name: "Alibi",
        image: "images/operators/alibi.png",
        secondaryGadgets: ["Proximity Alarm", "Observation Blocker"]
    },
    {
        name: "Clash",
        image: "images/operators/clash.png",
        secondaryGadgets: ["Impact Grenade", "Barbed Wire"]
    },
    {
        name: "Kaid",
        image: "images/operators/kaid.png",
        secondaryGadgets: ["Nitro Cell", "Barbed Wire", "Observation Blocker"]
    },
    {
        name: "Mozzie",
        image: "images/operators/mozzie.png",
        secondaryGadgets: ["Barbed Wire", "Nitro Cell","Impact Grenade"]
    },
    {
        name: "Warden",
        image: "images/operators/warden.png",
        secondaryGadgets: ["Deployable Shield", "Nitro Cell", "Observation Blocker"]
    },
    {
        name: "Goyo",
        image: "images/operators/goyo.png",
        secondaryGadgets: ["Impact Grenade", "Proximity Alarm","Bulletproof Camera"]
    },
    {
        name: "Wamai",
        image: "images/operators/wamai.png",
        secondaryGadgets: ["Impact Grenade", "Proximity Alarm"]
    },
    {
        name: "Oryx",
        image: "images/operators/oryx.png",
        secondaryGadgets: ["Barbed Wire", "Proximity Alarm"]
    },
    {
        name: "Melusi",
        image: "images/operators/melusi.png",
        secondaryGadgets: ["Impact Grenade", "Bulletproof Camera"]
    },
    {
        name: "Aruni",
        image: "images/operators/aruni.png",
        secondaryGadgets: ["Barbed Wire", "Bulletproof Camera"]
    },
    {
        name: "Thunderbird",
        image: "images/operators/thunderbird.png",
        secondaryGadgets: ["Barbed Wire", "Deployable Shield","Bulletproof Camera"]
    },
    {
        name: "Thorn",
        image: "images/operators/thorn.png",
        secondaryGadgets: ["Deployable Shield", "Barbed Wire"]
    },
    {
        name: "Azami",
        image: "images/operators/azami.png",
        secondaryGadgets: ["Impact Grenade", "Barbed Wire"]
    },
    {
        name: "Solis",
        image: "images/operators/solis.png",
        secondaryGadgets: ["Proximity Alarm", "Bulletproof Camera"]
    },
    {
        name: "Fenrir",
        image: "images/operators/fenrir.png",
        secondaryGadgets: ["Bulletproof Camera", "Observation Blocker"]
    },
    {
        name: "Tubarao",
        image: "images/operators/tubarao.png",
        secondaryGadgets: ["Proximity Alarm", "Nitro Cell"]
    },
    {
        name: "Skopos",
        image: "images/operators/skopos.png",
        secondaryGadgets: ["Proximity Alarm", "Impact Grenade"]
    }
];