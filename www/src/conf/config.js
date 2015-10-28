/**
 * This is a configuration file.
 * Changes to this file may cause the application does not work as it should
 **/

EASYNGS_VERSION = "v0.5";

// Development
OPENCGA_VERSION = "v1";
OPENCGA_HOST = "http://localhost:8081/opencga";
//OPENCGA_HOST = "http://bioinfodev.hpc.cam.ac.uk/opencga";

CELLBASE_VERSION = "v3";
CELLBASE_HOST = "http://bioinfodev.hpc.cam.ac.uk/cellbase";

var TEST = {
    "test": [
        {
            "name": "survival",
            "version": "1.0"
        }
    ]
}

var QUALITY_CONTROL = {
    "trimming": [
        {
            "name": "cutadapt",
            "version": "v2.1"
        },
        {
            "name": "trimmomatic",
            "version": "v2.1"
        }
    ],
    "fastqc": [
        {
            "name": "fastqc",
            "version": "v0.11.4"
        }
    ]
};

var RNASEQ = {
    "mapping": [
        {
            "name": "tophat",
            "version": "v2.1.0"
        },
        {
            "name": "star",
            "version": "v2.4.2a"
        }
    ],
    "counting": [
        {
            "name": "htseq",
            "version": "v0.6.1p2"
        },
        {
            "name": "cufflinks",
            "version": "v2.2.1"
        }
    ]
};

var WGS = {
    "mapping": [
        {
            "name": "bwa",
            "version": "1.0"
        },
        {
            "name": "other",
            "version": ""
        }
    ],
    "variant": [
        {
            "name": "vcf",
            "version": "2"
        },
        {
            "name": "noidea",
            "version": "v2"
        }
    ]
}

/*
var QUALITY_CONTROL = {
    "trimming": [
        {
            "name": "CutAdapt",
            "version": "v2.1",
            "path": "/opt",
            "description": "Tool to remove adapters from fastq files.",
            "website": "http://cutadapt.readthedocs.org/en/latest/guide.html",
            "parameters": [
                {
                    "name": "Adapter sequence",
                    "id": "adapter",
                    "numeric": false,
                    "required": true,
                    "description": "Adapter sequence to be filtered out from the input fastq file"
                },
                {
                    "name": "Number of threads",
                    "id": "threads",
                    "numeric": true,
                    "required": false,
                    "description": "This parameter sets the number of threads that will be used during the execution",
                }
            ],
        },
        {
            "name": "Trimmomatic",
            "version": "v2.1",
            "path": "/opt",
            "description": "Tool to remove adapters from fastq files.",
            "website": "http://www.usadellab.org/cms/?page=trimmomatic"
        }
    ],
    "fastqc": [
        {
            "name": "FastQC",
            "version": "v0.11.4",
            "path": "/opt",
            "description": "A quality control application for high throughput sequence data.",
            "website": "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/",
        }
    ]
};

var RNASEQ = {
    "mapping": [
        {
            "name": "Tophat",
            "version": "v2.1.0",
            "path": "mypath",
            "description": "A spliced read mapper for RNA-Seq",
            "website": "https://ccb.jhu.edu/software/tophat/index.shtml",
            "parameters": [
                {
                    "name": "Library type",
                    "id": "library-type",
                    "numeric": false,
                    "required": false,
                    "description": "Library type used during the sequencing of the samples. Can be one of (fr-unstranded, fr-firstrand, fr-secondstrand)"
                },
                {
                    "name": "Number of threads",
                    "id": "num-threads",
                    "numeric": true,
                    "required": false,
                    "description": "This parameter sets the number of threads that will be used during the execution",
                    "default": "4"
                }
            ]
        },
        {
            "name": "STAR",
            "version": "v2.4.2a",
            "description": "Ultrafast universal RNA-seq aligner",
            "website": "https://rna-star.googlecode.com/files/STARmanual_2.3.0.1.pdf",
            "parameters": [
                {
                    "name": "Number of threads",
                    "id": "runThreadN",
                    "numeric": true,
                    "required": false,
                    "description": "This parameter sets the number of threads that will be used during the execution",
                    "default": "4"
                }
            ]
        }
    ],
    "counting": [
        {
            "name": "HTSeq",
            "version": "v0.6.1p2",
            "path": "",
            "description": "Counting reads Python tool",
            "website": "http://www-huber.embl.de/users/anders/HTSeq/doc/count.html",
            "parameters": [
                {
                    "name": "Library type",
                    "id": "stranded",
                    "numeric": false,
                    "required": false,
                    "description": "Library type used during the sequencing of the samples. Can be one of (yes, no, reversed)",
                    "default": "yes"
                }, {
                    "name": "Feature type",
                    "id": "type",
                    "numeric": false,
                    "required": false,
                    "description": "Feature type (3rd column in GFF file) to be used",
                    "default": "exon"
                }, {
                    "name": "ID attribute",
                    "id": "idattr",
                    "numeric": false,
                    "required": false,
                    "description": "GFF attribute to be used as feature ID. Several GFF lines with the same feature ID will be considered as parts of the same feature.",
                    "default": "gene_id"
                }, {
                    "name": "Mode",
                    "id": "mode",
                    "numeric": false,
                    "required": false,
                    "description": "Mode to handle reads overlapping more than one feature. Possible values are union, intersection-strict and intersection-nonempty.",
                    "default": "union"
                }
            ],
        },
        {
            "name": "Cufflinks",
            "version": "v2.2.1",
            "path": "mypath",
            "description": "Transcriptome assembly and differential expression analysis for RNA-Seq.",
            "website": "http://cole-trapnell-lab.github.io/cufflinks/manual/",
            "parameters": [
                {
                    "name": "Library type",
                    "id": "library-type",
                    "numeric": false,
                    "required": false,
                    "description": "Library type used during the sequencing of the samples. Can be one of (ff-firstrand, " +
                                   "ff-secondstrand, ff-unstranded, fr-firststrand, fr-secondstrand, fr-unstranded)",
                    "default": "fr-unstranded"
                },
                {
                    "name": "Number of threads",
                    "id": "num-threads",
                    "numeric": true,
                    "required": false,
                    "description": "This parameter sets the number of threads that will be used during the execution"
                }
            ]
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
*/