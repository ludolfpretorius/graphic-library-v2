<?php
	require './controllers/images/utils.php';

	class Image {
		private $imagesFile = './db/images.json';
		private $imagesFolder = '../upload/';

		private function createRandomString() {
            $length = random_bytes('12');
            $name = bin2hex($length);
            return $name;
        }

		function fetchAll() {
			$data = file_get_contents($this->imagesFile);
			return json_decode($data);
		}

		function upload($req) {
			$uploadedFile = $_FILES['file1'];
			
			if (is_uploaded_file($uploadedFile)) {
                $mimeType = mime_content_type($uploadedFile);
                $allowedFileTypes = ['image/svg+xml'];
                if (!in_array($mimeType, $allowedFileTypes)) {
                    return 'Error: 400';
                }
            }

			$successfullyMoved = false;
			$successfullyUploaded = false;
			$filename = '';
			foreach ($_FILES as $key => $file) {
				$folder = $this->imagesFolder;
				$filename = $this->createRandomString();
				$location = $folder.$filename.'.svg';
				$successfullyMoved = move_uploaded_file($_FILES[$key]['tmp_name'], $location);
				if ($successfullyMoved) {
					$imagesLength = count(json_decode(file_get_contents($this->imagesFile)));
					$uploadedInfo = json_decode($req['info']);
					$imageEntry = [];
					$imageEntry['id'] = $imagesLength + 2;
					foreach($uploadedInfo as $type => $value) {
						$imageEntry[$type] = $value;
					}
					$imageEntry['url'] = $filename;
					$successfullyUploaded = writeToJsonFile($this->imagesFile, $imageEntry);
				}
			}

			if ($successfullyUploaded) {
				$allImages = $this->fetchAll();
				return $allImages;
			}
			return null;
		}
	}