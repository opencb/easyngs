/**
 * This is a configuration file.
 * Changes to this file may cause the application does not work as it should
 **/

EASYNGS_VERSION = "v0.5";

// Development
OPENCGA_VERSION = "v1";
OPENCGA_HOST = "http://bioinfodev.hpc.cam.ac.uk/opencga";

CELLBASE_VERSION = "v3";
CELLBASE_HOST = "http://bioinfodev.hpc.cam.ac.uk/cellbase";

var QUALITY_CONTROL = {
    "trimming": [
        {
            "name": "CutAdapt",
            "version": "v2.1",
            "path": "/opt",
            "description": "Tool to remove adapters from fastq files.",
            "url": "http://cutadapt.readthedocs.org/en/latest/guide.html"
        },
        {
            "name": "Trimmomatic",
            "version": "v2.1",
            "path": "/opt",
            "description": "Tool to remove adapters from fastq files.",
            "url": "http://www.usadellab.org/cms/?page=trimmomatic"
        }
    ]
};

var RNASEQ = {
    "mapping": [
        {
            "name": "Tophat",
            "version": "v2.1",
            "path": "mypath",
            "description": "Widely used RNA-seq mapper"
        },
        {
            "name": "STAR",
            "version": "v12",
            "path": "asdasd",
            "description": "STAR works..."
        }
    ],
    "counting": [
        {
            "name": "HTSeq",
            "version": "0.6",
            "path": "",
            "description": "Python counting tool"
        },
        {
            "name": "Cufflinks",
            "version": "v1.2",
            "path": "mypath",
            "description": "Cufflinks goes with the Tophat suite..."
        }
    ]
};

var WGS = {
    "mapping": [
        {
            "name": "BWA",
            "version": "1.0",
            "path": "",
            "description": "BWA works..."
        },
        {
            "name": "Other",
            "version": "",
            "path": "",
            "description": "Other WGS mapper"
        }
    ],
    "variant": [
        {
            "name": "VCF",
            "version": "2",
            "path": "asdasd",
            "description": "asdasd"
        },
        {
            "name": "No idea",
            "version": "v2",
            "path": "",
            "description": "Another variant calling tool !"
        }
    ]
}